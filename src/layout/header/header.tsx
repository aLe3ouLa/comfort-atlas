import { useEffect, useState } from "react";
import "./header.css";

const navigationItems = [
  { id: "hero", label: "Home" },
  { id: "explore", label: "Explore" },
  { id: "featured-dish", label: "Featured Dish" },
  { id: "why-it-matters", label: "Why it matters" },
  { id: "your-comfort-food", label: "Your comfort food" },
];

export const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const updateActiveSection = () => {
      const readingLine = window.innerHeight * 0.35;
      let currentSection = sections[0]?.id ?? "hero";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= readingLine) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="site-header">
      <nav aria-label="Primary navigation" className="site-nav">
        <a className="site-brand" href="#hero">
          The Comfort Atlas
        </a>

        <ul className="nav-links">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.label}
                  <span className="nav-dish-indicator" aria-hidden="true">
                    <span className="nav-steam nav-steam-one" />
                    <span className="nav-steam nav-steam-two" />
                    <span className="nav-steam nav-steam-three" />
                    <span className="nav-plate" />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
