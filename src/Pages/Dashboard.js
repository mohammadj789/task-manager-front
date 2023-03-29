import React, { useState } from "react";
import classes from "./Dashboard.module.css";
import HeaderBar from "../components/header/HeaderBar";
import TaskOverview from "../components/task/TaskOverview";

import ProgressBar from "../components/progress/ProgressBar";
import MessagesBar from "../components/message/MessagesBar";
import CalenderBar from "../components/calender/CalenderBar";
import BuyListBar from "../components/buy/BuyListBar";
import NewsBar from "../components/news/NewsBar";
import {
  dummyuser,
  dummytasks,
  dummybuylist,
} from "../helper/DummyData";
import PageTemplate from "./PageTemplate";

const Dashboard = () => {
  const [tasks, setTasks] = useState(dummytasks);
  const [user, setUser] = useState(dummyuser);
  const [buylist, setBuylist] = useState(dummybuylist);
  return (
    <PageTemplate>
      <div className={classes.selectedPage}>
        <HeaderBar userPic={user.profilePic} />
        <TaskOverview tasks={tasks} setDone={setTasks} />
        <ProgressBar friends={user.friends} tasks={tasks} />
        <MessagesBar user={user} />
        <BuyListBar buyList={buylist} />
        <CalenderBar tasks={tasks} />
        <NewsBar news={user.news} />
      </div>
    </PageTemplate>
  );
};

export default Dashboard;
