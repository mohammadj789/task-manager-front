import React, { useState } from "react";
import classes from "./MessagesBar.module.css";

import UsersMessage from "./UsersMessage";

const MessagesBar = (props) => {
  const [userFriend, setUserFriend] = useState(props.user.friends);
  const connectFriends = userFriend.filter(
    (friend) => friend.massages
  );

  const setReadHandler = (id) => {
    setUserFriend((prev) => {
      const item = prev.find((item) => item.id === id);
      item.newMessage = false;

      return [...prev];
    });
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
