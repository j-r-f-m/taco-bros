import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Navigation } from "./Navigation";

describe("Navbar component", () => {
  it("renders navbar and corresponding links", () => {
    render(<Navigation />);
    expect(screen.getByRole("navigation").textContent).toMatch(/About/i);
    expect(screen.getByRole("navigation").textContent).toMatch(/Projects/i);
    expect(screen.getByRole("navigation").textContent).toMatch(/Contact/i);
  });
});
