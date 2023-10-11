import { Navigation } from "../components/navigation/Navigation";
import { Hero } from "../pages/Hero";
import { Foodtruck } from "../pages/FoodTruck";
import { Tacos } from "../pages/Tacos";
import { Team } from "../pages/Team";
import { Contact } from "../pages/Contact";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Tacos />
      <Foodtruck />
      <Team />
      <Contact />
    </>
  );
}

export default App;
