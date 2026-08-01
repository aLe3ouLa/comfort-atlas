import { countryCount } from "../../data/comfort-foods";
import "./hero.css";

export const Hero = () => {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="hero-content">
        <p className="hero-eyebrow">
          {countryCount} countries. {countryCount} dishes. One universal feeling.
        </p>

        <h1 id="hero-heading">What does home taste like?</h1>

        <p className="hero-description">
          Explore the dishes people return to for warmth, nostalgia, and
          connection.
        </p>

        <a className="primary-action" href="#explore">
          Explore the map
          <span aria-hidden="true">&#8595;</span>
        </a>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <span className="hero-orbit hero-orbit-one" />
        <span className="hero-orbit hero-orbit-two" />

        <svg
          className="hero-globe"
          viewBox="0 0 420 420"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle className="globe-ocean" cx="210" cy="210" r="178" />
          <ellipse className="globe-line" cx="210" cy="210" rx="84" ry="178" />
          <path className="globe-line" d="M32 210h356" />
          <path className="globe-line" d="M57 125c95 32 211 32 306 0" />
          <path className="globe-line" d="M57 295c95-32 211-32 306 0" />

          <path
            className="globe-land globe-land-main"
            d="M92 96l32-25 46 3 17 19 36 8 11 24-21 20-34-3-12 22-27 8-9 30-24-1-10-25-25-13-9-31 18-15z"
          />
          <path
            className="globe-land globe-land-main"
            d="M222 131l26-31 49-8 38 21 21 33-15 22-27-2-18 23-14 41-25 7-14-34-25-10-9-31z"
          />
          <path
            className="globe-land globe-land-warm"
            d="M141 211l39 5 30 30-11 32-25 21-9 45-20 9-16-37-22-23 5-39z"
          />
          <path
            className="globe-land globe-land-warm"
            d="M291 259l36 8 23 26-15 24-40-5-14-25z"
          />

          <circle className="globe-marker" cx="177" cy="136" r="7" />
          <circle className="globe-marker" cx="282" cy="153" r="7" />
          <circle className="globe-marker" cx="150" cy="256" r="7" />
        </svg>

        <span className="food-token food-token-one">&#127836;</span>
        <span className="food-token food-token-two">&#127858;</span>
        <span className="food-token food-token-three">&#127837;</span>
      </div>
    </section>
  );
};
