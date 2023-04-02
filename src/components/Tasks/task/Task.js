import React from "react";
import classes from "./Task.module.css";

import FriendAhead from "../../dashboard/progress/FriendAhead";
import { dateReformat, DayIsPast } from "../../../helper/date";
import { useDispatch, useSelector } from "react-redux";
import { taskAction } from "../../../store/TaskSlice";

const Task = (props) => {
  const dispatch = useDispatch();
  const taskCategories = useSelector(
    (state) => state.task.categories
  );

  const user = useSelector((state) => state.user);

  const task = props.task;

  const friendsWiths = task.with.map((withUser) =>
    user.friends.find((friend) => friend.id === withUser)
  );

  const backgroundcolor = taskCategories.find(
    (cat) => cat.title === task.category
  );

  const doneHandler = () => {
    dispatch(taskAction.toggleTaskDone(task.id));
  };

  let status;
  if (task.done)
    status = (
      <span className={classes.statuslogo}>
        <ion-icon name="checkmark-done-outline"></ion-icon>
      </span>
    );
  else
    status = DayIsPast(new Date(task.year, task.month, task.day)) ? (
      <span className={classes.statuslogo}>
        <ion-icon name="close-outline"></ion-icon>
      </span>
    ) : (
      <button
        onClick={doneHandler}
        disabled={task.done}
        className={classes.status}
      >
        <span className={classes.statuslogo}>
          <ion-icon name="checkmark-outline"></ion-icon>
        </span>
      </button>
    );

  return (
    <div
      style={
        backgroundcolor && { backgroundColor: backgroundcolor.color }
      }
      className={classes.task}
    >
      <div
        style={{
          "--background": backgroundcolor && backgroundcolor.color,
        }}
        className={classes.taskheader}
      >
        <span>{task.category}</span>
        {status}
      </div>
      <div className={classes.taskdetail}>
        <p>{task.title}</p>
      </div>
      <div className={classes.taskdate}>
        <span>
          {dateReformat(new Date(task.year, task.month, task.day))}
        </span>
        {task.with.length === 0 ? (
          <img alt="profile" src={user.profilePic} />
        ) : (
          <FriendAhead
            friendsList={[
              { profilePic: user.profilePic, id: user.id },
              ...friendsWiths,
            ]}
            noneborder
          />
        )}
      </div>
    </div>
  );
};

export default Task;
