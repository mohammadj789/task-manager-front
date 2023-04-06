import { Button } from "@mui/material";
import Input from "../../UI/Input";
import React, { useRef, useState } from "react";
import classes from "./addBuyForm.module.css";
import MuiTheme from "../../../helper/MuiTheme";
import { useDispatch } from "react-redux";
import { buyAction } from "../../../store/BuySlice";
import { generateUniqueId } from "../../../helper/generateId";
import { uiAction } from "../../../store/UiSclice";

const AddBuyForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const itemInputRef = useRef();
  const saveItemHandler = (e) => {
    e.preventDefault();
    const name = itemInputRef.current.value.trim();
    if (name === "") {
      setError("Enter a name for the Item");
      return;
    }
    dispatch(buyAction.addItem({ id: generateUniqueId(), name }));
    dispatch(uiAction.toggleAddBuy());
  };

  return (
    <div className={classes.form}>
      <form onSubmit={saveItemHandler}>
        <MuiTheme>
          <div className={classes.input}>
            <Input
              lableClass={classes.title}
              inputClass={classes.iteminput}
              lableContent={"Item"}
              inputType={"text"}
              ref={itemInputRef}
            />
          </div>
          <Button type="submit">Add</Button>
        </MuiTheme>
      </form>
      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
};

export default AddBuyForm;
