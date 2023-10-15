import { Navigation } from "../components/navigation/Navigation";
import { Hero } from "../pages/Hero";
import { Foodtruck } from "../pages/FoodTruck";
import { Tacos } from "../pages/Tacos";
import { Team } from "../pages/Team";
import { Contact } from "../pages/Contact";
import { Footer } from "../components/navigation/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <Navigation />
      <Hero />

      <Element name="tacos">
        <Tacos />
      </Element>

      <Element name="food-truck">
        <Foodtruck />
      </Element>

      <Element name="team">
        <Team />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </>
  );
}

export default App;
