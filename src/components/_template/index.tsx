import React from "react";
import styles from "./index.module.css";

type TemplateProps = {
  exampleProp: string;
};

const Template = ({ exampleProp }: TemplateProps) => (
  <div className={styles.main}>{exampleProp}</div>
);

export default Template;
