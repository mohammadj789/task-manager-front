import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    addForm: false,
    addBuy: false,
  },
  reducers: {
    toggleAddBuy(state) {
      state.addBuy = !state.addBuy;
    },
    toggleAddForm(state) {
      state.addForm = !state.addForm;
    },
    AddFormTrue(state) {
      state.addForm = true;
    },
    AddFormFalse(state) {
      state.addForm = false;
    },
  },
});
export const uiAction = uiSlice.actions;
