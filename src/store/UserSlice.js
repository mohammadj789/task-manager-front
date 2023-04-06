import { createSlice } from "@reduxjs/toolkit";
import { dummyuser } from "../helper/DummyData";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: dummyuser.id,
    name: dummyuser.name,
    profilePic: dummyuser.profilePic,
    friends: dummyuser.friends,
    news: dummyuser.news,
    token: null,
  },
  reducers: {
    setMessageToRead(state, action) {
      const id = action.payload;
      const friend = state.friends.find((item) => item.id === id);
      friend.newMessage = false;
    },
    login(state, action) {
      const token = action.payload;
      state.token = token;
    },
    logout(state) {
      state.token = null;
    },
    sendMessage(state, action) {
      const id = action.payload.id;
      const message = action.payload.message;
      console.log(id, message);

      const friend = state.friends.find((friend) => friend.id === id);

      friend.massages
        ? friend.massages.push({ content: message, user: true })
        : (friend.massages = [{ content: message, user: true }]);
    },
  },
});
export const userAction = userSlice.actions;
