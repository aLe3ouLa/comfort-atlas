import { useState } from "react";
import type { FormEvent } from "react";
import {
  defaultStampVariant,
  downloadStamp,
  stampVariants,
} from "../../utils/comfort-stamp";
import "./your-comfort-food.css";

type ComfortCard = {
  dish: string;
  place: string;
};

export const YourComfortFood = () => {
  const [dish, setDish] = useState("");
  const [place, setPlace] = useState("");
  const [comfortCard, setComfortCard] = useState<ComfortCard | null>(null);
  const [stampVariantId, setStampVariantId] = useState(defaultStampVariant.id);

  const selectedVariant =
    stampVariants.find((variant) => variant.id === stampVariantId) ??
    defaultStampVariant;

  const createCard = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedDish = dish.trim();

    if (!trimmedDish) return;

    setComfortCard({
      dish: trimmedDish,
      place: place.trim() || "Somewhere close to home",
    });
  };

  const resetCard = () => {
    setDish("");
    setPlace("");
    setComfortCard(null);
  };

  const downloadCardStamp = () => {
    if (!comfortCard) return;

    downloadStamp(
      { dish: comfortCard.dish, place: comfortCard.place, emoji: "🍽️" },
      selectedVariant,
    );
  };

  return (
    <section
      id="your-comfort-food"
      className="your-comfort-food"
      aria-labelledby="comfort-heading"
    >
      <div className="comfort-intro">
        <p className="section-eyebrow">Your turn</p>
        <h2 id="comfort-heading">What dish tastes like home to you?</h2>
        <p>
          Make a tiny Comfort Atlas keepsake. Nothing is submitted or saved;
          your answer stays in this browser tab.
        </p>
      </div>

      <div className="comfort-maker">
        <form className="comfort-form" onSubmit={createCard}>
          <div>
            <label htmlFor="comfort-dish">Your comfort dish</label>
            <input
              id="comfort-dish"
              value={dish}
              onChange={(event) => setDish(event.target.value)}
              placeholder="Grandma's soup"
              required
            />
          </div>

          <div>
            <label htmlFor="comfort-place">Place or country (optional)</label>
            <input
              id="comfort-place"
              value={place}
              onChange={(event) => setPlace(event.target.value)}
              placeholder="Budapest"
            />
          </div>

          <fieldset className="stamp-style-picker">
            <legend>Stamp style</legend>
            <div className="stamp-swatches">
              {stampVariants.map((variant) => (
                <button
                  key={variant.id}
                  type="button"
                  className="stamp-swatch"
                  style={{ background: variant.background }}
                  title={variant.label}
                  aria-label={`${variant.label} stamp style`}
                  aria-pressed={variant.id === stampVariantId}
                  onClick={() => setStampVariantId(variant.id)}
                />
              ))}
            </div>
          </fieldset>

          <button type="submit">Make my comfort card</button>
        </form>

        <div className="comfort-card-stage" aria-live="polite">
          {comfortCard ? (
            <article
              className="personal-comfort-card"
              style={{
                background: selectedVariant.background,
                borderColor: selectedVariant.borderColor,
                borderStyle: selectedVariant.borderStyle,
                boxShadow: `0.6rem 0.6rem 0 ${selectedVariant.borderColor}`,
              }}
            >
              <span aria-hidden="true">🍽️</span>
              <p>The Comfort Atlas</p>
              <h3>{comfortCard.dish}</h3>
              <p>{comfortCard.place}</p>
              <p className="passport-note">Tastes like home</p>
              <div className="comfort-card-actions">
                <button type="button" onClick={downloadCardStamp}>
                  Download my stamp
                </button>
                <button
                  className="secondary-card-action"
                  type="button"
                  onClick={resetCard}
                >
                  Make another
                </button>
              </div>
            </article>
          ) : (
            <div className="comfort-card-placeholder">
              <span aria-hidden="true">✦</span>
              <p>Your comfort card will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
