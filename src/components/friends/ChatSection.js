import React from "react";

import classes from "./chatSection.module.css";

import useGetFriend from "../../hooks/useGetFriend";
import MessageItem from "./MessageItem";
import { useRef } from "react";
import { userAction } from "../../store/UserSlice";
import { useDispatch } from "react-redux";
const ChatSection = ({ id }) => {
  const friend = useGetFriend(id);
  const messageInputRef = useRef();
  const dispatch = useDispatch();
  const sendHandler = () => {
    if (messageInputRef.current.value.trim() === "") return;
    dispatch(
      userAction.sendMessage({
        id: id,
        message: messageInputRef.current.value,
      })
    );
    messageInputRef.current.value = "";
  };

  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <img src={friend.profilePic} alt={friend.name} />
        <p>{friend.name}</p>
        <button>
          <ion-icon name="search-outline"></ion-icon>
        </button>
        <button>
          <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        </button>
      </div>
      <div className={classes.messages}>
        {friend.massages?.map((mes) => (
          <MessageItem key={mes.id} message={mes} />
        )) || ""}
      </div>
      <div className={classes.input}>
        <input ref={messageInputRef} />
        <button onClick={sendHandler}>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default ChatSection;
