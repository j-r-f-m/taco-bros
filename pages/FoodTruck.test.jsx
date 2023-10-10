import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Foodtruck } from "./FoodTruck";

describe("Food Truck component", () => {
  it("reders Foot Truck section", () => {
    render(<Foodtruck />);

    expect(screen.getByRole("heading", { name: "Our Taco Truck" }));
    expect(screen.getByRole("img"));
  });
});
