import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./Components/Layout/App";


describe("App component", () => {
  it("should render the correct heading", () => {
    render(<App />);
    expect(screen.getByText("headText").textContent).toMatch(/Shop rite/);
  });

    it("should match the expected textContent", () => {
     
      const headerText = screen.getByText("Shop rite");
      expect(headerText).toBeInThe
    });

});
