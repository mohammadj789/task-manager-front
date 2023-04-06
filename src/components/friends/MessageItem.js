import React from "react";
import classes from "./MessageItem.module.css";
const MessageItem = ({ message }) => {
  return (
    <div
      style={
        message.user && {
          alignSelf: "flex-end",
          borderRadius: "8px 8px 0 8px",
          backgroundColor: "#04c5822a",
        }
      }
      className={classes.item}
    >
      <p>{message.content}</p>
    </div>
  );
};

export default MessageItem;
