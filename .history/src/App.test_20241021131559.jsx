import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { setupDirect } from "@testing-library/user-event/dist/cjs/setup/setup.js";
import App from "./Components/Layout/App";


describe("App component", () => {
  it("should render the correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/Shop rite/);
  });
});
