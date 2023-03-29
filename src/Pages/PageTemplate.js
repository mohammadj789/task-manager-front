import React from "react";
import MainNavigation from "../components/header/MainNavigation";
import classes from "./PageTemplate.module.css";
const PageTemplate = (props) => {
  return (
    <div className={classes.mainPage}>
      <MainNavigation />
      {props.children}
    </div>
  );
};

export default PageTemplate;
