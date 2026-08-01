import "./why-it-matters.css";

const comfortStories = [
  {
    emoji: "💭",
    title: "Memory",
    copy: "A familiar smell or flavour can carry us back to people, kitchens, and moments we still hold close.",
    className: "story-card-peach",
  },
  {
    emoji: "🫶",
    title: "Connection",
    copy: "Comfort food is often something we pass around a table, make for someone else, or learn side by side.",
    className: "story-card-olive",
  },
  {
    emoji: "🏡",
    title: "Identity",
    copy: "A simple dish can carry family traditions across cities, borders, and generations without losing its heart.",
    className: "story-card-sage",
  },
];

export const WhyItMatters = () => {
  return (
    <section
      id="why-it-matters"
      className="why-it-matters"
      aria-labelledby="why-heading"
    >
      <div className="why-heading">
        <p className="section-eyebrow">More than a meal</p>
        <h2 id="why-heading">Why comfort food matters</h2>
        <p>
          What we reach for when we need comfort often tells a story about
          where we have been and who made us feel at home.
        </p>
      </div>

      <ul className="story-grid">
        {comfortStories.map((story) => (
          <li className={`story-card ${story.className}`} key={story.title}>
            <span aria-hidden="true">{story.emoji}</span>
            <h3>{story.title}</h3>
            <p>{story.copy}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
