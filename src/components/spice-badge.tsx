import {
  getSpiceLevelRank,
  spiceLevelLabels,
} from "../data/comfort-foods";
import type { SpiceLevel } from "../data/comfort-foods";
import "./spice-badge.css";

const MAX_CHILIES = 3;

type SpiceBadgeProps = {
  level: SpiceLevel;
  compact?: boolean;
};

export const SpiceBadge = ({ level, compact = false }: SpiceBadgeProps) => {
  const activeCount = getSpiceLevelRank(level);

  return (
    <span
      className={compact ? "spice-badge spice-badge-compact" : "spice-badge"}
      aria-label={`Spice level: ${spiceLevelLabels[level]}`}
    >
      <span className="spice-chilies" aria-hidden="true">
        {Array.from({ length: MAX_CHILIES }, (_, index) => (
          <span
            key={index}
            className={
              index < activeCount ? "spice-chili spice-chili-active" : "spice-chili"
            }
          >
            🌶️
          </span>
        ))}
      </span>
      {!compact && <span className="spice-badge-label">{spiceLevelLabels[level]}</span>}
    </span>
  );
};
