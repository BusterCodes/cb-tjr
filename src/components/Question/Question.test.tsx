/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Question from "./Question";

test("Question block renders question", () => {
  const q = "question text goes here";
  render(<Question question={q} />);
  const text = screen.getByText(q);
  expect(text).toBeInTheDocument();
});
