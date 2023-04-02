import React from "react";
import ChartBar from "./ChartBar";
import classes from "./progressBar.module.css";

import FriendAhead from "./FriendAhead";
import { sameManthCheck } from "../../../helper/date";
import { useSelector } from "react-redux";

const ProgressBar = () => {
  const taskData = useSelector((state) => state.task.tasks);
  const friends = useSelector((state) => state.user.friends);

  const filteredTasks = taskData.filter((task) => {
    const toDate = new Date(task.year, task.month, task.day);
    return sameManthCheck(toDate);
  });

  const doneFilterLength = filteredTasks.filter(
    (task) => task.done === true
  ).length;

  const max = filteredTasks.length;

  const friendsAhead = friends.filter(
    (friend) => friend.ahead === true
  );

  return (
    <div className={classes.progress}>
      <div className={classes.progressLine}>
        <p>You have done {`${doneFilterLength}/${max}`} this month</p>
        <ChartBar
          border={true}
          value={doneFilterLength}
          maxValue={max}
        />
      </div>
      <FriendAhead friendsList={friendsAhead} />
      <p>Your friends are behind</p>
    </div>
  );
};

export default ProgressBar;
