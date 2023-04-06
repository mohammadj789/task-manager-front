import React, { useState } from "react";
import PageTemplate from "./PageTemplate";
import classes from "./FriendPAge.module.css";
import { useDispatch, useSelector } from "react-redux";
import FriendItem from "../components/friends/FriendItem";
import ChatSection from "../components/friends/ChatSection";
import { userAction } from "../store/UserSlice";

const FriendsPage = () => {
  const dispatch = useDispatch();
  const friends = useSelector((state) => state.user.friends);
  const [id, setId] = useState(null);
  const selectFriendHandler = (id) => {
    dispatch(userAction.setMessageToRead(id));
    setId(id);
  };

  return (
    <PageTemplate>
      <div className={classes.friend}>
        <div className={classes.friendlists}>
          <div className={classes.header}>
            <button>
              <ion-icon name="people-outline"></ion-icon>
            </button>
            <p>Friends</p>
            <button>
              <ion-icon name="person-add-outline"></ion-icon>
            </button>
          </div>
          <div className={classes.friendsitems}>
            {friends
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
              ))}
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
