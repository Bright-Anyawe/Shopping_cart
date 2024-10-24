import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./Components/Layout/App";
import { MemoryRouter } from "react-router-dom";

describe("App component", () => {
  it("should render the correct heading", () => {
    render(
    
    <MemoryRouter>


    </MemoryRouter>
    );

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toHaveTextContent("Shop rite");
  });

  // it("should match the expected textContent", () => {

  //   const headerText = screen.getByText("Shop rite");
  //   expect(headerText).toBeInTheDocument();
  // });
});
