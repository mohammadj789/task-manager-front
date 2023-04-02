import React from "react";
import { useSelector } from "react-redux";
import classes from "./NewsBar.module.css";
import NewsItem from "./NewsItem";

const NewsBar = () => {
  const news = useSelector((state) => state.user.news);
  return (
    <div className={classes.notification}>
      <div className={classes.taskHead}>
        <span>News</span>
        <ion-icon name="notifications-outline"></ion-icon>
      </div>
      <div className={classes.notifs}>
        {news.map((item) => (
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
