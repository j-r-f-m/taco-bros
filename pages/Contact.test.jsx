import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Contact } from "./Contact";

describe("Contact", () => {
  it("reders Contact section", () => {
    render(<Contact />);

    // expect(screen.getByRole("textbox", { name: "Your Name" }));
    // expect(screen.getByRole("textbox", { name: "Email address" }));
    expect(screen.getByRole("heading", { name: "Contact Us" }));
    expect(
      screen.getByRole("heading", {
        name: "Lorem ipsum dolor sit amet consectetur.",
      })
    );
  });
});
