import { Footer } from "./layout/footer/footer";
import { Header } from "./layout/header/header";
import { ExploreGlobe } from "./layout/sections/explore-globe";
import { FeaturedDish } from "./layout/sections/featured-dish";
import { Hero } from "./layout/sections/hero";
import { WhyItMatters } from "./layout/sections/why-it-matters";
import { YourComfortFood } from "./layout/sections/your-comfort-food";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ExploreGlobe />
        <FeaturedDish />
        <WhyItMatters />
        <YourComfortFood />
      </main>

      <Footer/>
    </>
  );
}

export default App
