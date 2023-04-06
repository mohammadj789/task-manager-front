import React from "react";
import MyCalendar from "../components/calender/MyCalender";
import PageTemplate from "./PageTemplate";
import classes from "./CalenderPage.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiAction } from "../store/UiSclice";
const CalenderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const btnhandler = () => {
    dispatch(uiAction.AddFormTrue());
    navigate("/tasks");
  };
  return (
    <PageTemplate>
      <div className={classes.calender}>
        <MyCalendar />
        <button onClick={btnhandler} className={classes.btn}>
          <ion-icon
            className={classes.ion}
            name="add-outline"
          ></ion-icon>
        </button>
      </div>
    </PageTemplate>
  );
};

export default CalenderPage;
