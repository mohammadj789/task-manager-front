import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../../store/UserSlice";
import classes from "./MessagesBar.module.css";

import UsersMessage from "./UsersMessage";

const MessagesBar = (props) => {
  const dispatch = useDispatch();
  const userFriend = useSelector((state) => state.user.friends);

  const connectFriends = userFriend.filter(
    (friend) => friend.massages
  );

  const setReadHandler = (id) => {
    dispatch(userAction.setMessageToRead(id));
  };

  return (
    <div className={classes.message}>
      <div className={classes.messageTitle}>Messages</div>
      <div className={classes.messagesender}>
        {connectFriends.map((friend) => (
          <UsersMessage
            name={friend.name}
            img={friend.profilePic}
            newMessage={friend.newMessage}
            key={friend.id}
            id={friend.id}
            onRead={setReadHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default MessagesBar;
