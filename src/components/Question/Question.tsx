import React from "react";
import heading from "./Question.module.css";

type QuestionProps = {
  question: string;
};

const Question = ({ question }: QuestionProps) => (
  <h1 className={heading.heading}>{question}</h1>
);

export default Question;
