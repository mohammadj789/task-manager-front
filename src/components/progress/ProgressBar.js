import React from "react";
import ChartBar from "./ChartBar";
import classes from "./progressBar.module.css";

import FriendAhead from "./FriendAhead";

const ProgressBar = (props) => {
  const doneFilterLength = props.tasks.filter(
    (task) => task.done === true
  ).length;
  const max = props.tasks.length;
  return (
    <div className={classes.progress}>
      <div className={classes.progressLine}>
        <p>You have done {`${doneFilterLength}/${max}`}</p>
        <ChartBar
          border={true}
          value={doneFilterLength}
          maxValue={max}
        />
      </div>
      <FriendAhead friendsList={props.friends} />
      <p>Your friends are behind</p>
    </div>
  );
};

export default ProgressBar;
