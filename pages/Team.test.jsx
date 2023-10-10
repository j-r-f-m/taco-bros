import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Team } from "./Team";

describe("Team component", () => {
  it("reders Team section", () => {
    render(<Team />);

    expect(screen.getByRole("heading", { name: "The Taco Bros" }));
    expect(
      screen.getByRole("heading", {
        name: "Lorem ipsum dolor sit amet consectetur.",
      })
    );
    expect(screen.getAllByRole("img"));
  });
});
