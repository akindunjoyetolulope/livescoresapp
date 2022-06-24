import React from "react";

import classes from "./Section.module.css";

const Section = (props) => {
  const allClasses = `${classes.summary}`;
  return <section className={allClasses}>{props.children}</section>;
};

export default Section;
