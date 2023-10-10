import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Hero } from "./Hero";

describe("Hero component", () => {
  it("renders Hero section", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { name: "Hi we are the Taco Brothers" })
    );
    expect(screen.getByRole("heading", { name: "Do you want tacos?" }));
    expect(screen.getByRole("heading", { name: "Do you want tacos?" }));
    expect(screen.getByRole("button", { name: "We have them" }));
  });
});
