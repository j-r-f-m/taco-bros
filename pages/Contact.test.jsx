import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Contact } from "./Contact";

describe("Contact", () => {
  it("reders Contact section", () => {
    render(<Contact />);

    expect(screen.getByRole("textbox", { name: "Email address" }));
    expect(screen.getByRole("textbox"));
  });
});
