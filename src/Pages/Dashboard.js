import React from "react";
import classes from "./Dashboard.module.css";
import HeaderBar from "../components/header/HeaderBar";
import TaskOverview from "../components/dashboard/task/TaskOverview";

import ProgressBar from "../components/dashboard/progress/ProgressBar";
import MessagesBar from "../components/dashboard/message/MessagesBar";
import CalenderBar from "../components/dashboard/calender/CalenderBar";
import BuyListBar from "../components/dashboard/buy/BuyListBar";
import NewsBar from "../components/dashboard/news/NewsBar";
import PageTemplate from "./PageTemplate";

const Dashboard = () => {
  return (
    <PageTemplate>
      <div className={classes.selectedPage}>
        <HeaderBar />
        <TaskOverview />
        <ProgressBar />
        <MessagesBar />
        <BuyListBar />
        <CalenderBar />
        <NewsBar />
      </div>
    </PageTemplate>
  );
};

export default Dashboard;
