import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  Button,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";

import classes from "./AddForm.module.css";
import Input from "../../UI/Input";
import { taskAction } from "../../../store/TaskSlice";
import { generateUniqueId } from "../../../helper/generateId";

import FreindSelectList from "./FreindSelectList";
let friends;
const AddForm = (props) => {
  const taskCategories = useSelector(
    (state) => state.task.categories
  );
  const dispatch = useDispatch();
  const titleInputRef = useRef();

  const [category, setCategory] = useState("");
  const [date, setDate] = useState(null);
  const [error, setError] = useState(null);
  const [friendsWiths, setFriendsWiths] = useState(false);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const datepickerChangeHandler = (date) => {
    setDate(date);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !date ||
      category === "" ||
      titleInputRef.current.value.trim() === ""
    ) {
      setError("Please fill all fields");
      return;
    }

    dispatch(
      taskAction.addTask({
        title: titleInputRef.current.value,
        done: false,
        id: generateUniqueId(),
        year: date.$d.getFullYear(),
        month: date.$d.getMonth(),
        day: date.$d.getDate(),
        category: category,
        must: false,
        with: friends,
      })
    );
    setError(null);
    titleInputRef.current.value = "";
    setCategory("");
    setDate(null);
    setFriendsWiths(false);
  };

  const checkHandler = (list) => {
    friends = list;
  };

  return (
    <div
      className={`${classes.form} ${
        !props.visable && classes.visable
      }`}
    >
      <form onSubmit={submitHandler}>
        <div component="form" className={classes.formpart}>
          <Input
            lableClass={classes.inputLable}
            inputClass={classes.inputtitle}
            lableContent={"Task title"}
            inputType={"text"}
            ref={titleInputRef}
          />
        </div>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            onAccept={datepickerChangeHandler}
            value={date}
          />
        </LocalizationProvider>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Age"
            onChange={handleChange}
          >
            {taskCategories.map((cat) => (
              <MenuItem key={cat.title} value={cat.title}>
                {cat.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {!friendsWiths && (
          <Button onClick={() => setFriendsWiths(true)}>
            Add Freiend
          </Button>
        )}

        {friendsWiths && (
          <FreindSelectList onCheckedChange={checkHandler} />
        )}
        <Button type="submit">Save</Button>
      </form>
      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
};

export default AddForm;
