import { Navigation } from "../components/navigation/Navigation";
import { Hero } from "../pages/Hero";
import { Foodtruck } from "../pages/FoodTruck";
import { Tacos } from "../pages/Tacos";
import { Team } from "../pages/Team";
import { Contact } from "../pages/Contact";
import { Footer } from "../components/navigation/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Tacos />
      <Foodtruck />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
