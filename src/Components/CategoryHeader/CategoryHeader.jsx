import React from "react";
import classes from "./CategoryHeader.module.css";

const CategoryHeader = (props) => {
  const { title } = props;

  return <div className={classes.header}>{title}</div>;
};

export default CategoryHeader;
