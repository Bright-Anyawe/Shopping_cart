
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../Layout/App";


describe("App component", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});