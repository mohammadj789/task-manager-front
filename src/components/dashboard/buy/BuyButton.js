import { Button } from "@mui/material";
import React from "react";
import MuiTheme from "../../../helper/MuiTheme";
import classes from "./BuyButton.module.css";

const BuyButton = (props) => {
  return (
    <MuiTheme>
      <Button
        onClick={() => {
          props.setDone(props.item.id);
        }}
      >
        <span
          className={`${classes.name} ${
            props.item.bought && classes.bought
          }`}
        >
          {props.item.name}
        </span>
      </Button>
    </MuiTheme>
  );
};

export default BuyButton;
