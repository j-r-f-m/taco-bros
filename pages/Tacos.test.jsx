import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Tacos } from "./Tacos";

describe("Food Truck component", () => {
  it("Foot Truck component", () => {
    render(<Tacos />);

    expect(screen.getByRole("heading", { name: "Our Tacos" }));
    expect(
      screen.getByRole("heading", {
        name: "Lorem ipsum dolor sit amet consectetur.",
      })
    );
    expect(screen.getAllByRole("img"));
  });
});
