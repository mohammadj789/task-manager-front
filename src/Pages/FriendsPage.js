import React, { useState } from "react";
import PageTemplate from "./PageTemplate";
import classes from "./FriendPAge.module.css";
import { useDispatch, useSelector } from "react-redux";
import FriendItem from "../components/friends/FriendItem";
import ChatSection from "../components/friends/ChatSection";
import { userAction } from "../store/UserSlice";
import { Button, Input } from "@mui/material";
import MuiTheme from "../helper/MuiTheme";

const FriendsPage = () => {
  const dispatch = useDispatch();
  const friends = useSelector((state) => state.user.friends);
  const [id, setId] = useState(null);

  const [cantacts, setContacts] = useState(false);
  const [addFriend, setAddFriend] = useState(false);

  const selectFriendHandler = (id) => {
    dispatch(userAction.setMessageToRead(id));
    setId(id);
  };

  const addFrom = (
    <MuiTheme>
      <div className={classes.input}>
        <Input
          lableClass={classes.title}
          inputClass={classes.iteminput}
          lableContent={"Item"}
          inputType={"text"}
          // ref={""}
        />
      </div>
      <Button type="submit">Add</Button>
    </MuiTheme>
  );

  const friendsListBar = cantacts
    ? friends.map((friend) => (
        <FriendItem
          key={friend.id}
          id={friend.id}
          pic={friend.profilePic}
          name={friend.name}
          lastmessage={[]}
          onSelectFriend={selectFriendHandler}
        />
      ))
    : friends
        .filter((friend) => friend.massages)
        .map((friend) => (
          <FriendItem
            key={friend.id}
            id={friend.id}
            pic={friend.profilePic}
            name={friend.name}
            lastmessage={friend.massages}
            newmessage={friend.newMessage}
            onSelectFriend={selectFriendHandler}
          />
        ));
  return (
    <PageTemplate>
      <div className={classes.friend}>
        <div className={classes.friendlists}>
          <div className={classes.header}>
            {cantacts ? (
              <button
                onClick={() => {
                  setAddFriend(false);
                  setContacts(false);
                }}
              >
                <ion-icon name="arrow-back-outline"></ion-icon>
              </button>
            ) : (
              <button
                onClick={() => {
                  setAddFriend(false);
                  setContacts(true);
                }}
              >
                <ion-icon name="people-outline"></ion-icon>
              </button>
            )}
            <p>Friends</p>
            <button
              onClick={() => {
                setAddFriend(true);
                setContacts(false);
              }}
            >
              <ion-icon name="person-add-outline"></ion-icon>
            </button>
          </div>
          <div className={classes.friendsitems}>
            {addFriend ? addFrom : friendsListBar}
          </div>
        </div>
        <div className={classes.chat}>
          <ChatSection id={id || 200} />
        </div>
      </div>
    </PageTemplate>
  );
};

export default FriendsPage;
