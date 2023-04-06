import { configureStore } from "@reduxjs/toolkit";
import { buySlice } from "./BuySlice";
import { taskSlice } from "./TaskSlice";
import { uiSlice } from "./UiSclice";
import { userSlice } from "./UserSlice";

const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
    user: userSlice.reducer,
    buy: buySlice.reducer,
    ui: uiSlice.reducer,
  },
});
export default store;
