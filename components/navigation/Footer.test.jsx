import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Footer } from "./Footer";

describe("Footer component", () => {
  it("renders Footer ", () => {
    render(<Footer />);

    expect(screen.getByRole("navigation"));
  });
});
