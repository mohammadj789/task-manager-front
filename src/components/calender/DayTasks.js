import classes from "./DayTasks.module.css";
import React from "react";

const DayTasks = ({ tasks }) => {
  return (
    <div className={classes.todayList}>
      <div className={classes.title}>
        <p>Days tasks</p>
      </div>

      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      ) : (
        <li>No task for todaty</li>
      )}
    </div>
  );
};

export default DayTasks;
