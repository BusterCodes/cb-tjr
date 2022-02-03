import React from "react";
import content from "./Content.module.css";
import car from "../../car.jpg";

const Content = () => (
  <div className={content.container}>
    <img src={car} className={content.car} alt="Car" />
  </div>
);

export default Content;
