import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Transition } from "react-transition-group";

import AddForm from "../components/Tasks/AddForm";
import FilterBar from "../components/Tasks/FilterBar";
import Task from "../components/Tasks/Task";

import MuiTheme from "../helper/MuiTheme";
import { sortTasks } from "../helper/sort";
import { uiAction } from "../store/UiSclice";
import PageTemplate from "./PageTemplate";
import classes from "./TasksPage.module.css";

const TasksPage = () => {
  const dispatch = useDispatch();
  const taskData = useSelector((state) => state.task.tasks);
  const isAdding = useSelector((state) => state.ui.addForm);
  const sortedTasks = sortTasks([...taskData]);
  const [filter, setFilter] = useState("all");

  const filterTasks = (category) => {
    setFilter(category);
  };

  const addHandler = () => {
    dispatch(uiAction.toggleAddForm());
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
            {sortedTasks
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
        <Transition
          mountOnEnter
          unmountOnExit
          in={isAdding}
          timeout={500}
        >
          {(state) => (
            <div
              className={`${classes.addtask} 
            ${
              (state === "entered" || state === "entering") &&
              classes.thirtyfivewidth
            }`}
            >
              <MuiTheme>
                <AddForm visable={isAdding} />
              </MuiTheme>
            </div>
          )}
        </Transition>
      </div>
    </PageTemplate>
  );
};

export default TasksPage;
