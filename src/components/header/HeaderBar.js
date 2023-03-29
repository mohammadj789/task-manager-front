import React from "react";
import { Link } from "react-router-dom";
import classes from "./HeaderBar.module.css";

const HeaderBar = (props) => {
  return (
    <header className={classes.header}>
      <input
        className={classes.input}
        placeholder="Search"
        type="text"
      />
      <div className={classes.profSection}>
        <Link className={`${classes.bell} ${classes.li}`} to={""}>
          <ion-icon name="notifications-outline"></ion-icon>
        </Link>
        <img
          className={classes.profilePic}
          src={props.userPic}
          alt="profile pic"
        />
      </div>
    </header>
  );
};

export default HeaderBar;
