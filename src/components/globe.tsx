import createGlobe from "cobe";
import type { Arc, Marker } from "cobe";
import { useEffect, useRef, useState } from "react";
import {
  comfortFoods,
  getCountryCoordinates,
  getFoodEmoji,
} from "../data/comfort-foods";
import type { ComfortFood } from "../data/comfort-foods";
import "./globe.css";

type GlobeProps = {
  selectedCountryCode: string;
  onSelectCountry?: (countryCode: string) => void;
};

type TrailSegment = {
  id: number;
  from: [number, number];
  to: [number, number];
};

const foodsByCountryCode = new Map(
  comfortFoods.map((food) => [food.countryCode, food]),
);

const hexToUnitRgb = (hex: string): [number, number, number] => {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16) / 255;
  const g = parseInt(value.slice(2, 4), 16) / 255;
  const b = parseInt(value.slice(4, 6), 16) / 255;
  return [r, g, b];
};

const lerpColor = (
  from: [number, number, number],
  to: [number, number, number],
  amount: number,
): [number, number, number] => [
  from[0] + (to[0] - from[0]) * amount,
  from[1] + (to[1] - from[1]) * amount,
  from[2] + (to[2] - from[2]) * amount,
];

// Mirrors cobe's internal lat/lng -> unit vector -> screen-space projection
// (see node_modules/cobe's `U`/`O` helpers) so marker hit-testing and the
// hover tooltip line up with what's actually drawn, since cobe exposes no
// pointer-picking API of its own.
const toUnitVector = (lat: number, lng: number): [number, number, number] => {
  const latRad = (lat * Math.PI) / 180;
  const lngRad = (lng * Math.PI) / 180 - Math.PI;
  const cosLat = Math.cos(latRad);
  return [-cosLat * Math.cos(lngRad), Math.sin(latRad), cosLat * Math.sin(lngRad)];
};

const projectToCanvas = (
  vector: [number, number, number],
  phi: number,
  theta: number,
  aspect: number,
): { x: number; y: number; visible: boolean } => {
  const cosTheta = Math.cos(theta);
  const cosPhi = Math.cos(phi);
  const sinTheta = Math.sin(theta);
  const sinPhi = Math.sin(phi);
  const [vx, vy, vz] = vector;
  const c = cosPhi * vx + sinPhi * vz;
  const s = sinPhi * sinTheta * vx + cosTheta * vy - cosPhi * sinTheta * vz;
  const facingCamera = -sinPhi * cosTheta * vx + sinTheta * vy + cosPhi * cosTheta * vz;
  return {
    x: (c / aspect + 1) / 2,
    y: (-s + 1) / 2,
    visible: facingCamera >= 0 || c * c + s * s >= 0.64,
  };
};

const AUTO_ROTATE_SPEED = 0.0022;
const EASE_FACTOR = 0.06;
const THETA_LIMIT = 0.55;
const DRAG_THRESHOLD_PX = 4;
const MARKER_HIT_RADIUS_PX = 16;
const MAX_TRAIL_SEGMENTS = 3;

export const Globe = ({ selectedCountryCode, onSelectCountry }: GlobeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const selectedCountryCodeRef = useRef(selectedCountryCode);
  selectedCountryCodeRef.current = selectedCountryCode;
  const onSelectCountryRef = useRef(onSelectCountry);
  onSelectCountryRef.current = onSelectCountry;

  const pointerInteractingRef = useRef<number | null>(null);
  const pointerMovementRef = useRef(0);
  const phiRef = useRef(0);
  const targetPhiRef = useRef(0);
  const thetaRef = useRef(0.3);
  const targetThetaRef = useRef(0.3);
  const hoveredCodeRef = useRef<string | null>(null);
  const prevCountryCodeRef = useRef(selectedCountryCode);
  const trailRef = useRef<TrailSegment[]>([]);
  const segmentIdRef = useRef(0);

  const [hoveredFood, setHoveredFood] = useState<ComfortFood | null>(null);

  useEffect(() => {
    const [lat, lng] = getCountryCoordinates(selectedCountryCode);
    // cobe's marker projection puts a location at screen-center when
    // phi = -lng - PI/2 (derived from its vector/rotation math), not -lng.
    targetPhiRef.current = -(lng * Math.PI) / 180 - Math.PI / 2;
    targetThetaRef.current = Math.max(
      -THETA_LIMIT,
      Math.min(THETA_LIMIT, (lat * Math.PI) / 180),
    );

    const previousCode = prevCountryCodeRef.current;
    prevCountryCodeRef.current = selectedCountryCode;

    if (previousCode !== selectedCountryCode) {
      segmentIdRef.current += 1;
      trailRef.current = [
        ...trailRef.current,
        {
          id: segmentIdRef.current,
          from: getCountryCoordinates(previousCode),
          to: getCountryCoordinates(selectedCountryCode),
        },
      ].slice(-MAX_TRAIL_SEGMENTS);
    }
  }, [selectedCountryCode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const rootStyle = getComputedStyle(document.documentElement);
    const baseColor = hexToUnitRgb(
      rootStyle.getPropertyValue("--color-primary").trim(),
    );
    const glowColor = hexToUnitRgb(
      rootStyle.getPropertyValue("--color-surface").trim(),
    );
    const markerColor = hexToUnitRgb(
      rootStyle.getPropertyValue("--color-accent").trim(),
    );
    const selectedMarkerColor = hexToUnitRgb(
      rootStyle.getPropertyValue("--color-secondary").trim(),
    );

    let width = wrap.offsetWidth;
    const dpr = Math.min(window.devicePixelRatio, 2);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const buildMarkers = (): Marker[] =>
      comfortFoods.map((food) => {
        const [lat, lng] = getCountryCoordinates(food.countryCode);
        const isSelected = food.countryCode === selectedCountryCodeRef.current;
        return {
          location: [lat, lng],
          size: isSelected ? 0.09 : 0.045,
          color: isSelected ? selectedMarkerColor : markerColor,
        };
      });

    // Same idea as the flat map's fading "trip trail" between countries
    // you've visited, redrawn as great-circle arcs since cobe has no
    // concept of stroke opacity: older hops fade toward the ocean color
    // instead of toward transparent.
    const buildArcs = (): Arc[] => {
      const segments = trailRef.current;
      return segments.map((segment, index) => {
        const age = segments.length - 1 - index;
        const fade = Math.max(1 - age * 0.35, 0.15);
        return {
          from: segment.from,
          to: segment.to,
          color: lerpColor(selectedMarkerColor, baseColor, 1 - fade),
        };
      });
    };

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: width * dpr,
      height: width * dpr,
      phi: 0,
      theta: 0.3,
      dark: 0.8,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor,
      markerColor,
      glowColor,
      markers: buildMarkers(),
      arcs: buildArcs(),
      arcColor: selectedMarkerColor,
      arcWidth: 0.5,
      arcHeight: 0.35,
    });

    // cobe v2 draws a single synchronous frame in createGlobe and has no
    // internal render loop (its README's `onRender` option is a stale v1
    // pattern the shipped API no longer reads) — we must drive redraws
    // ourselves via update(), which is also what lets rotation/markers
    // animate and lets the sphere repaint once its map texture finishes
    // loading async.
    let frameId: number;
    const render = () => {
      const isHeld = pointerInteractingRef.current !== null || hoveredCodeRef.current !== null;
      if (!isHeld && !prefersReducedMotion) {
        targetPhiRef.current += AUTO_ROTATE_SPEED;
      }

      phiRef.current += (targetPhiRef.current - phiRef.current) * EASE_FACTOR;
      thetaRef.current +=
        (targetThetaRef.current - thetaRef.current) * EASE_FACTOR;

      globe.update({
        phi: phiRef.current,
        theta: thetaRef.current,
        width: width * dpr,
        height: width * dpr,
        markers: buildMarkers(),
        arcs: buildArcs(),
      });

      if (hoveredCodeRef.current && tooltipRef.current) {
        const [lat, lng] = getCountryCoordinates(hoveredCodeRef.current);
        const projected = projectToCanvas(
          toUnitVector(lat, lng),
          phiRef.current,
          thetaRef.current,
          1,
        );
        tooltipRef.current.style.left = `${projected.x * wrap.offsetWidth}px`;
        tooltipRef.current.style.top = `${projected.y * wrap.offsetHeight}px`;
      }

      frameId = requestAnimationFrame(render);
    };
    frameId = requestAnimationFrame(render);

    const resizeObserver = new ResizeObserver(() => {
      width = wrap.offsetWidth;
    });
    resizeObserver.observe(wrap);

    const updatePointerTarget = (clientX: number) => {
      if (pointerInteractingRef.current === null) return;
      const delta = clientX - pointerInteractingRef.current;
      pointerMovementRef.current = delta;
      targetPhiRef.current = phiRef.current + delta / 200;
    };

    const findMarkerAt = (clientX: number, clientY: number): string | null => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return null;
      const px = (clientX - rect.left) / rect.width;
      const py = (clientY - rect.top) / rect.height;
      const aspect = rect.width / rect.height;
      const hitRadius = MARKER_HIT_RADIUS_PX / rect.width;

      let closestCode: string | null = null;
      let closestDistance = hitRadius;

      for (const food of comfortFoods) {
        const [lat, lng] = getCountryCoordinates(food.countryCode);
        const projected = projectToCanvas(
          toUnitVector(lat, lng),
          phiRef.current,
          thetaRef.current,
          aspect,
        );
        if (!projected.visible) continue;

        const distance = Math.hypot(projected.x - px, projected.y - py);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestCode = food.countryCode;
        }
      }

      return closestCode;
    };

    const setHoveredCode = (code: string | null) => {
      if (hoveredCodeRef.current === code) return;
      hoveredCodeRef.current = code;
      setHoveredFood(code ? foodsByCountryCode.get(code) ?? null : null);
    };

    const pointerDownPositionRef = { current: null as { x: number; y: number } | null };
    const draggedRef = { current: false };

    const onPointerDown = (event: PointerEvent) => {
      pointerInteractingRef.current =
        event.clientX - pointerMovementRef.current;
      pointerDownPositionRef.current = { x: event.clientX, y: event.clientY };
      draggedRef.current = false;
      setHoveredCode(null);
      canvas.style.cursor = "grabbing";
    };

    const onPointerUp = (event: PointerEvent) => {
      const wasInteracting = pointerInteractingRef.current !== null;
      pointerInteractingRef.current = null;
      canvas.style.cursor = "grab";

      if (wasInteracting && !draggedRef.current && onSelectCountryRef.current) {
        const hitCountryCode = findMarkerAt(event.clientX, event.clientY);
        if (hitCountryCode) {
          onSelectCountryRef.current(hitCountryCode);
        }
      }
      pointerDownPositionRef.current = null;
    };

    const onPointerMove = (event: PointerEvent) => {
      const downPosition = pointerDownPositionRef.current;
      if (downPosition) {
        const movedDistance = Math.hypot(
          event.clientX - downPosition.x,
          event.clientY - downPosition.y,
        );
        if (movedDistance > DRAG_THRESHOLD_PX) {
          draggedRef.current = true;
        }
      }
      updatePointerTarget(event.clientX);

      if (pointerInteractingRef.current === null) {
        const hitCountryCode = findMarkerAt(event.clientX, event.clientY);
        canvas.style.cursor = hitCountryCode ? "pointer" : "grab";
        setHoveredCode(hitCountryCode);
      }
    };

    const onPointerLeave = (event: PointerEvent) => {
      setHoveredCode(null);
      onPointerUp(event);
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(frameId);
      globe.destroy();
      resizeObserver.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div className="comfort-globe-wrap" ref={wrapRef}>
      {/* The globe duplicates the accessible country picker below (search
          input + results list), so it's presentation-only for AT users
          rather than a second, mouse-only way to reach the same content. */}
      <canvas className="comfort-globe-canvas" ref={canvasRef} aria-hidden="true" />

      {hoveredFood && (
        <div className="globe-tooltip" ref={tooltipRef}>
          <span aria-hidden="true">{getFoodEmoji(hoveredFood.countryCode)}</span>
          <span>
            <strong>{hoveredFood.country}</strong>
            {hoveredFood.dish}
          </span>
        </div>
      )}
    </div>
  );
};
