import React from "react";
import content from "./ContentBlock.module.css";
import car from "../../car.jpg";

const ContentBlock = () => (
  <div className={content.container}>
    <img src={car} className={content.car} alt="Car" />
  </div>
);

export default ContentBlock;
