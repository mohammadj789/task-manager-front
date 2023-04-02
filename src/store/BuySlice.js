import { createSlice } from "@reduxjs/toolkit";
import { dummybuylist } from "../helper/DummyData";
export const buySlice = createSlice({
  name: "buy",
  initialState: {
    list: dummybuylist,
  },
  reducers: {
    setToBuy(state, action) {
      const id = action.payload;
      const item = state.list.find((item) => item.id === id);
      item.bought = !item.bought;
    },
  },
});
export const buyAction = buySlice.actions;
