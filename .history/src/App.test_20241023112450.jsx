import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./Components/Layout/App";


describe("App component", () => {
  it("should render the correct heading", () => {
    render(<App />);
    expect(screen.getByText("headText").textContent).toMatch(/Shop rite/);
  });

  
});
