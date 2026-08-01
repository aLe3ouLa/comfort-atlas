import { lazy, Suspense, useState } from "react";
import { SpiceBadge } from "../../components/spice-badge";
import {
  comfortFoods,
  countryCount,
  getFoodEmoji,
} from "../../data/comfort-foods";
import { playSelectSound } from "../../utils/select-sound";
import "./explore-globe.css";

// cobe (the globe's WebGL renderer) is the single heaviest dependency in
// the app — code-split it into its own chunk so the rest of the page
// doesn't wait on it to become interactive.
const Globe = lazy(() =>
  import("../../components/globe").then((module) => ({
    default: module.Globe,
  })),
);

export const ExploreGlobe = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    comfortFoods[0].countryCode,
  );

  const selectedFood =
    comfortFoods.find((food) => food.countryCode === selectedCountryCode) ??
    comfortFoods[0];

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;

  const filteredFoods = comfortFoods.filter((food) => {
    return (
      food.country.toLowerCase().includes(normalizedQuery) ||
      food.dish.toLowerCase().includes(normalizedQuery)
    );
  });

  const selectCountry = (countryCode: string) => {
    setSelectedCountryCode(countryCode);
    setSearchQuery("");
    playSelectSound();
  };

  const spinSomewhereNew = () => {
    const alternatives = comfortFoods.filter(
      (food) => food.countryCode !== selectedCountryCode,
    );
    const randomFood =
      alternatives[Math.floor(Math.random() * alternatives.length)];

    selectCountry(randomFood.countryCode);
  };

  return (
    <section
      id="explore"
      className="explore-globe"
      aria-labelledby="explore-heading"
    >
      <div className="explore-globe-heading">
        <p className="explore-globe-eyebrow">Explore the atlas</p>
        <h2 id="explore-heading">
          {countryCount} dishes. Spin the globe to find comfort.
        </h2>
        <p>
          Drag the globe, search for a country, or hit surprise me — the
          dish will turn to face you.
        </p>
      </div>

      <div className="explore-globe-toolbar">
        <div className="globe-country-search">
          <label htmlFor="globe-country-search">
            Search by country or comfort food
          </label>
          <input
            id="globe-country-search"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Try Kenya or jerk chicken"
            autoComplete="off"
          />

          {isSearching && (
            <div className="globe-search-results">
              <p className="globe-search-result-count" aria-live="polite">
                {filteredFoods.length}{" "}
                {filteredFoods.length === 1 ? "result" : "results"}
              </p>

              {filteredFoods.length === 0 ? (
                <p className="globe-search-empty">
                  No comfort foods match your search.
                </p>
              ) : (
                <ul aria-label="Search results">
                  {filteredFoods.map((food) => (
                    <li key={food.countryCode}>
                      <button
                        type="button"
                        aria-pressed={
                          food.countryCode === selectedCountryCode
                        }
                        onClick={() => selectCountry(food.countryCode)}
                      >
                        <span>{food.country}</span>
                        <span className="globe-search-result-dish">
                          {food.dish}
                          <SpiceBadge level={food.spiceLevel} compact />
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        <button
          className="globe-surprise-action"
          type="button"
          onClick={spinSomewhereNew}
        >
          <span aria-hidden="true">&#10022;</span>
          Spin me somewhere new
        </button>
      </div>

      <div className="globe-stage">
        <Suspense fallback={<div className="globe-placeholder" aria-hidden="true" />}>
          <Globe
            selectedCountryCode={selectedCountryCode}
            onSelectCountry={selectCountry}
          />
        </Suspense>

        <div className="globe-legend" aria-hidden="true">
          <span /> Comfort food available
        </div>

        <article className="globe-food-card" aria-live="polite" aria-atomic="true">
          <span
            key={selectedFood.countryCode}
            className="globe-food-emoji"
            aria-hidden="true"
          >
            {getFoodEmoji(selectedFood.countryCode)}
          </span>
          <p className="globe-comfort-found">Now facing</p>
          <p className="globe-food-country">{selectedFood.country}</p>
          <h3>{selectedFood.dish}</h3>
          <SpiceBadge level={selectedFood.spiceLevel} />
          <p>{selectedFood.shortDescription}</p>
        </article>
      </div>
    </section>
  );
};
