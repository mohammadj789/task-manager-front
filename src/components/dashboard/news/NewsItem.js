import React from "react";
import classes from "./NewsItem.module.css";
const NewsItem = (props) => {
  return (
    <div className={classes.notif}>
      <p className={classes.notifTitle}>{props.title}</p>
      <p className={classes.summery}>{props.message}</p>
    </div>
  );
};

export default NewsItem;
