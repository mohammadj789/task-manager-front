import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DayIsPast, daysBetween } from "../../../helper/date";
import { taskAction } from "../../../store/TaskSlice";
import TaskItem from "./TaskItem";
import classes from "./TaskOverview.module.css";

const TaskOverview = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const taskData = useSelector((state) => state.task.tasks);

  const addToDoneHandler = (id) => {
    dispatch(taskAction.toggleTaskDone(id));
  };

  const nearTasks = taskData.filter((task) => {
    const toDate = new Date(task.year, task.month, task.day);

    return !DayIsPast(toDate) && daysBetween(toDate, new Date()) <= 7;
  });
  const addHandler = () => {
    navigate("/tasks", { state: { add: true } });
  };

  return (
    <div className={classes.task}>
      <div className={classes.taskHead}>
        <span>tasks in 7 days</span>
        <button onClick={addHandler} className={classes.addButton}>
          <ion-icon name="add-outline"></ion-icon>
        </button>
      </div>
      <ul className={classes.taskList}>
        {nearTasks.map((task, index) => (
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
