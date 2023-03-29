import React from "react";
import classes from "./NewsBar.module.css";
import NewsItem from "./NewsItem";

const NewsBar = (props) => {
  return (
    <div className={classes.notification}>
      <div className={classes.taskHead}>
        <span>News</span>
        <ion-icon name="notifications-outline"></ion-icon>
      </div>
      <div className={classes.notifs}>
        {props.news.map((item) => (
          <NewsItem
            title={item.title}
            message={item.content}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBar;
