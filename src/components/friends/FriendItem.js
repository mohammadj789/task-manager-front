import React from "react";
import classes from "./FriendItem.module.css";

// id={friend.id}
// pic={friend.profilePic}
// name={friend.name}
// lastmessage={friend.massages}
// newmessage={friend.newMessage}
const FriendItem = (props) => {
  return (
    <button
      onClick={() => props.onSelectFriend(props.id)}
      className={classes.item}
    >
      <img
        className={classes.pic}
        src={props.pic}
        alt={`${props.name}`}
      />
      <span className={classes.name}>{props.name}</span>
      <span className={classes.message}>
        {props.lastmessage.at(-1).content}
      </span>
      {props.newmessage && <div className={classes.newMessage}></div>}
    </button>
  );
};

export default FriendItem;
