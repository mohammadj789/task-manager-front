import React from "react";

import TaskItem from "./TaskItem";
import classes from "./TaskOverview.module.css";
const TaskOverview = (props) => {
  const addToDoneHandler = (id) => {
    props.setDone((prev) => {
      const item = prev.find((item) => item.id === id);
      item.done = !item.done;

      return [...prev];
    });
  };

  return (
    <div className={classes.task}>
      <div className={classes.taskHead}>
        <span>All tasks</span>
        <button className={classes.addButton}>
          <ion-icon name="add-outline"></ion-icon>
        </button>
      </div>
      <ul className={classes.taskList}>
        {props.tasks.map((task, index) => (
          <TaskItem
            index={index + 1}
            title={task.title}
            done={task.done}
            key={task.id}
            id={task.id}
            setDon={addToDoneHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskOverview;
