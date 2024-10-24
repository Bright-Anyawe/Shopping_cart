import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./Components/Layout/App";


describe("App component", () => {
  it("should render the correct heading", () => {
    render(<App />);

const heading = screen.getByRole('heading', {level: 1})

    expect()
  });

    // it("should match the expected textContent", () => {
     
    //   const headerText = screen.getByText("Shop rite");
    //   expect(headerText).toBeInTheDocument();
    // });

});
