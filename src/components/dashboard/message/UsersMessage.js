import React from "react";
import classes from "./UsersMessage.module.css";
const UsersMessage = (props) => {
  return (
    <button
      onClick={() => {
        props.onRead(props.id);
      }}
      className={classes.massageInfo}
    >
      <img
        className={classes.messImg}
        src={props.img}
        alt="user profile"
      />
      <p>{props.name}</p>
      {props.newMessage && <div className={classes.newMessage}></div>}
    </button>
  );
};

export default UsersMessage;
