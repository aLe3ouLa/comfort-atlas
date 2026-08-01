import { SpiceBadge } from "../../components/spice-badge";
import {
  getDailyComfortFood,
  getFoodEmoji,
} from "../../data/comfort-foods";
import { defaultStampVariant, downloadStamp } from "../../utils/comfort-stamp";
import "./featured-dish.css";

export const FeaturedDish = () => {
  const featuredFood = getDailyComfortFood();

  const downloadFeaturedStamp = () => {
    downloadStamp(
      {
        dish: featuredFood.dish,
        place: featuredFood.country,
        emoji: getFoodEmoji(featuredFood.countryCode),
      },
      defaultStampVariant,
    );
  };

  return (
    <section
      id="featured-dish"
      className="featured-dish"
      aria-labelledby="featured-dish-heading"
    >
      <div className="featured-dish-copy">
        <p className="section-eyebrow">Featured today</p>
        <h2 id="featured-dish-heading">A new taste of home, every day.</h2>
        <p>
          Come back tomorrow and the atlas will set a different comfort dish
          on the table.
        </p>
      </div>

      <article className="daily-dish-card">
        <div className="daily-dish-illustration" aria-hidden="true">
          <span>{getFoodEmoji(featuredFood.countryCode)}</span>
          <i className="daily-steam daily-steam-one" />
          <i className="daily-steam daily-steam-two" />
          <i className="daily-steam daily-steam-three" />
        </div>

        <div className="daily-dish-content">
          <p className="daily-label">Today&apos;s comfort dish</p>
          <p className="daily-country">{featuredFood.country}</p>
          <h3>{featuredFood.dish}</h3>
          <SpiceBadge level={featuredFood.spiceLevel} />
          <p>{featuredFood.shortDescription}</p>
          <div className="daily-dish-actions">
            <button
              type="button"
              className="daily-stamp-action"
              onClick={downloadFeaturedStamp}
            >
              Download today&apos;s stamp
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};
