import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./HeaderBar.module.css";

const HeaderBar = () => {
  const userPic = useSelector((state) => state.user.profilePic);
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
          src={userPic}
          alt="profile pic"
        />
      </div>
    </header>
  );
};

export default HeaderBar;
