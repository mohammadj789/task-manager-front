import { createSlice } from "@reduxjs/toolkit";

import { dummytasks } from "../helper/DummyData";
export const taskSlice = createSlice({
  name: "task",
  initialState: {
    categories: dummytasks.categories,
    tasks: dummytasks.tasks,
  },
  reducers: {
    updateCategory(state, action) {
      const index = action.payload.index;
      const color = action.payload.color;
      state.categories[index].color = color;
    },
    addCategory(state, action) {
      const newCategory = action.payload;
      console.log(newCategory);

      state.categories.push({
        title: newCategory.title,
        color: newCategory.color,
        id: newCategory.id,
      });
    },
    addTask(state, action) {
      const newTask = action.payload;
      state.tasks.push({
        title: newTask.title,
        done: false,
        id: newTask.id,
        year: newTask.year,
        month: newTask.month,
        day: newTask.day,
        category: newTask.category,
        must: newTask.must,
        with: newTask.with,
      });
    },

    toggleTaskDone(state, action) {
      const taskId = action.payload;
      const taskToUpdate = state.tasks.find(
        (task) => task.id === taskId
      );

      taskToUpdate.done = !taskToUpdate.done;
    },
  },
});

export const taskAction = taskSlice.actions;
