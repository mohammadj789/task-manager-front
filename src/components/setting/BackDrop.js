import React from "react";
import classes from "./BackDrop.module.css";
const BackDrop = (props) => {
  return <div onClick={props.onClick} className={classes.main}></div>;
};

export default BackDrop;
