import React from "react";
import classes from "./ChartBar.module.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight =
      Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className={classes.chartBar}>
      <div
        className={classes.chartBarInner}
        style={{ border: `${props.border && "1px solid #08e698"}` }}
      >
        <div
          className={classes.chartBarFill}
          style={{ width: barFillHeight }}
        ></div>
      </div>
    </div>
  );
};

export default ChartBar;
