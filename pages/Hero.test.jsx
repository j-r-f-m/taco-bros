import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Hero } from "./Hero";

describe("Navbar component", () => {
  it("renders navbar and corresponding links", () => {
    render(<Hero />);
    expect(screen.getByRole("img").textContent);
  });
});
