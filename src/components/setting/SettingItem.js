import React from "react";
import classes from "./SettingItem.module.css";
const SettingItem = (props) => {
  return (
    <button
      className={`${classes.container} ${
        props.selected === props.id && classes.selected
      }`}
      onClick={() => props.setAsSelected(props.id)}
    >
      <span className={classes.logo}>{props.logo}</span>
      <p>{props.title}</p>
      <span className={classes.arrow}>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </span>
    </button>
  );
};

export default SettingItem;
