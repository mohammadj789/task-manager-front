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
    addItem(state, action) {
      const item = action.payload;
      state.list.push({
        id: item.id,
        name: item.name,
        bought: false,
      });
    },
  },
});
export const buyAction = buySlice.actions;
