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
  },
  reducers: {
    setMessageToRead(state, action) {
      const id = action.payload;
      const friend = state.friends.find((item) => item.id === id);
      friend.newMessage = false;
    },

    getFriendsByID(state, action) {},
    getFriendsAhead(state) {},
    friendMessages(state) {},
  },
});
export const userAction = userSlice.actions;
