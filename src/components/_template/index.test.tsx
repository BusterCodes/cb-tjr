/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Template from "./index";

test("Template renders a string prop", () => {
  const stringProp = "This is a string";
  render(<Template exampleProp={stringProp} />);
  const text = screen.getByText(stringProp);
  expect(text).toBeInTheDocument();
});
