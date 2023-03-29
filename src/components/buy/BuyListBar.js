import React, { useState } from "react";
import ChartBar from "../progress/ChartBar";

import BuyButton from "./BuyButton";
import classes from "./BuyList.module.css";

const BuyListBar = (props) => {
  const [bought, setBought] = useState(props.buyList);
  const setDoneHandler = (id) => {
    setBought((prev) => {
      const item = prev.find((item) => item.id === id);
      item.bought = !item.bought;

      return [...prev];
    });
  };

  return (
    <div className={classes.buy}>
      <div className={classes.charbar}>
        <ChartBar
          border={false}
          value={bought.filter((item) => item.bought === true).length}
          maxValue={bought.length}
        />
      </div>
      <div className={classes.buyListTotal}>
        <div className={classes.taskHead}>
          <span>buy list</span>
          <button className={classes.addButton}>
            <ion-icon name="add-outline"></ion-icon>
          </button>
        </div>
        <div className={classes.buyList}>
          {props.buyList.map((item) => (
            <BuyButton
              item={item}
              key={item.id}
              id={item.id}
              setDone={setDoneHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyListBar;
