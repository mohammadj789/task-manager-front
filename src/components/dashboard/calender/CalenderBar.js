import dayjs from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";

import classes from "./CalenderBar.module.css";
import DayTasks from "./DayTasks";
import { useSelector } from "react-redux";

function CalenderBar() {
  const [value, setValue] = useState(dayjs());

  const taskData = useSelector((state) => state.task.tasks);

  const selectedDayTasks = taskData.filter(
    (task) =>
      task.year === value.$d.getFullYear() &&
      task.month === value.$d.getMonth() &&
      task.day === value.$d.getDate()
  );

  return (
    <div className={classes.calender}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={value}
          sx={{
            ".Mui-selected": {
              backgroundColor: "#04c582 !important",
            },
            ".MuiPickersDay-root": {
              height: "24px",
              width: "24px",
              margin: "0 2px",
            },
          }}
          className={classes.datePicker}
          onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>

      <DayTasks tasks={selectedDayTasks} />
    </div>
  );
}
export default CalenderBar;
