import React from "react";
import classes from "./MainNavigation.module.css";
import logoPic from "../../img/images-removebg-preview.png";
import { NavLink } from "react-router-dom";
const MainNavigation = () => {
  return (
    <div className={classes.nav}>
      <nav>
        <img className={classes.logo} src={logoPic} alt="logo" />
        <nav className={classes.list}>
          <NavLink
            to={"/dashboard"}
            className={(navdata) =>
              navdata.isActive
                ? `${classes.listItem} ${classes.selected}`
                : classes.listItem
            }
          >
            <ion-icon name="apps-outline"></ion-icon>
            <span>dashboard</span>
          </NavLink>
          <NavLink
            to={"/tasks"}
            className={(navdata) =>
              navdata.isActive
                ? `${classes.listItem} ${classes.selected}`
                : classes.listItem
            }
          >
            <ion-icon name="briefcase-outline"></ion-icon>
            <span>Tasks</span>
          </NavLink>
          <NavLink
            to={"/buylist"}
            className={(navdata) =>
              navdata.isActive
                ? `${classes.listItem} ${classes.selected}`
                : classes.listItem
            }
          >
            <ion-icon name="list-outline"></ion-icon>
            <span>Buy List</span>
          </NavLink>
          <NavLink
            to={"/calender"}
            className={(navdata) =>
              navdata.isActive
                ? `${classes.listItem} ${classes.selected}`
                : classes.listItem
            }
          >
            <ion-icon name="calendar-outline"></ion-icon>
            <span>calender</span>
          </NavLink>
          <NavLink
            to={"/friends"}
            className={(navdata) =>
              navdata.isActive
                ? `${classes.listItem} ${classes.selected}`
                : classes.listItem
            }
          >
            <ion-icon name="chatbox-outline"></ion-icon>
            <span>Friends</span>
          </NavLink>

          <NavLink
            to={"/setting"}
            className={(navdata) =>
              navdata.isActive
                ? `${classes.listItem} ${classes.selected}`
                : classes.listItem
            }
          >
            <ion-icon name="cog-outline"></ion-icon>
            <span>setting</span>
          </NavLink>
        </nav>
      </nav>
    </div>
  );
};

export default MainNavigation;
