import classes from "./FriendAhead.module.css";
const FriendAhead = (props) => {
  return (
    <div className={classes.deliveredImgs}>
      {props.friendsList.map((friend) => (
        <img
          className={`${classes.heroImg} ${
            props.noneborder && classes.noneBorder
          }`}
          src={friend.profilePic}
          alt="friend"
          key={friend.id}
        />
      ))}
    </div>
  );
};
export default FriendAhead;
