import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../Layout/App";

describe("App component", () => {
  it("should render the correct heading", () => {
    render(<App />);
    expect(screen.getByRole('heading').textContent).toMatch(false);
  });
});
