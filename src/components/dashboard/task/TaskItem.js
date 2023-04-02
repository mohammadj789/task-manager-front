import React from "react";
import classes from "./TaskItem.module.css";
const TaskItem = (props) => {
  const number = (props.index + "").padStart(2, "0");
  return (
    <li
      className={`${classes.taskListItem} ${
        props.done && classes.donetask
      }`}
    >
      <div className={classes.taskTitle}>
        <span>{number}</span>
        <p>{props.title}</p>
      </div>
      <div className={classes.taskLogo}>
        <button
          onClick={() => {
            props.setDon(props.id);
          }}
          className={`${props.done && classes.doneButton}`}
        >
          <ion-icon name="checkmark-circle-outline"></ion-icon>
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
