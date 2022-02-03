/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Content from "./ContentBlock";

test("Content contains var image", () => {
  render(<Content />);
  const car = screen.getByAltText("Car");
  expect(car).toBeInTheDocument();
});
