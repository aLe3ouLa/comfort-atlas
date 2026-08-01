import "./footer.css";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div>
          <a className="footer-brand" href="#hero">
            The Comfort Atlas
          </a>
          <p>A world map of the dishes that make us feel at home.</p>
        </div>

        <nav aria-label="Footer navigation">
          <a href="#explore">Explore</a>
          <a href="#featured-dish">Today&apos;s dish</a>
          <a href="#your-comfort-food">Your comfort food</a>
        </nav>

        <p className="footer-credit">
          Made by Alexandra Barka.{" "}
          <a href="/LICENSE" target="_blank" rel="noreferrer">
            MIT Licensed
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
