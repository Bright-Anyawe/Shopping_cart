import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../Layout/App";
import Shop from "../Layout/Shop";
import { MemoryRouter } from "react-router-dom";

describe("App component", () => {
  it("should render the correct heading", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toHaveTextContent("ShopRyt");
  });

  it("should update quantity value on change", () => {

    const mockQuantity = {1: 0};
    const handleQuantity = jest.fn

    const headerText = screen.getByText("Shop rite");
    expect(headerText).toBeInTheDocument();
  });
});
