import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

  it("should render input", () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );

 screen.debug(); 


  });

  it("should update quantity value on change", async () => {
    const mockQuantity = { 1: 0 };
    const handleQuantity = vi.fn();

 const {getByRole} =   render(
      <MemoryRouter>
        <Shop
          product={{ id: 1 }}
          quantity={mockQuantity}
          handleQuantity={handleQuantity}
        />
      </MemoryRouter>
    );

    const input = await waitFor(() => screen.getByRole("spinbutton"));

    fireEvent.change(input, { target: { value: "5" } });

    expect(input.value).toBe("5");

    expect(handleQuantity).toHaveBeenCalledWith(expect.any(Object), 1);
  });
});
