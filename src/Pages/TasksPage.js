import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import AddForm from "../components/Tasks/task/AddForm";
import FilterBar from "../components/Tasks/task/FilterBar";
import Task from "../components/Tasks/task/Task";

import MuiTheme from "../helper/MuiTheme";
import PageTemplate from "./PageTemplate";
import classes from "./TasksPage.module.css";

const TasksPage = () => {
  const taskData = useSelector((state) => state.task.tasks);
  const { state } = useLocation();

  const [filter, setFilter] = useState("all");
  const [isAdding, setIsAdding] = useState(state?.add || false);

  const filterTasks = (category) => {
    setFilter(category);
  };

  const addHandler = () => {
    setIsAdding((prev) => !prev);
  };

  return (
    <PageTemplate>
      <div className={classes.container}>
        <div
          className={`${classes.taskpage} ${
            isAdding && classes.smalltask
          }`}
        >
          <div className={classes.filterbar}>
            <FilterBar toFilter={filterTasks} />
            <button className={classes.addbtn} onClick={addHandler}>
              Add
            </button>
          </div>
          <div className={classes.tasks}>
            {taskData
              .filter((task) => {
                if (filter === "all") {
                  return task;
                } else {
                  return task.category === filter;
                }
              })
              .map((task) => (
                <Task key={task.id} task={task} />
              ))}
          </div>
        </div>

        <div
          style={isAdding ? { width: "35%" } : { width: "0" }}
          className={classes.addtask}
        >
          <MuiTheme>
            <AddForm visable={isAdding} />
          </MuiTheme>
        </div>
      </div>
    </PageTemplate>
  );
};

export default TasksPage;
