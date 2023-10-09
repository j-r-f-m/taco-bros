import { Navigation } from "../components/navigation/Navigation";
import { Hero } from "../pages/Hero";
import { Foodtruck } from "../pages/FoodTruck";
import { Tacos } from "../pages/Tacos";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Foodtruck />
      <Tacos />
    </>
  );
}

export default App;
