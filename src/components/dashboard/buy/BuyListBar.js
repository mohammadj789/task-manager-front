import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyAction } from "../../../store/BuySlice";
import ChartBar from "../progress/ChartBar";

import BuyButton from "./BuyButton";
import classes from "./BuyList.module.css";

const BuyListBar = (props) => {
  const dispatch = useDispatch();
  const buyList = useSelector((state) => state.buy.list);

  const setDoneHandler = (id) => {
    dispatch(buyAction.setToBuy(id));
  };

  return (
    <div className={classes.buy}>
      <div className={classes.charbar}>
        <ChartBar
          border={false}
          value={
            buyList.filter((item) => item.bought === true).length
          }
          maxValue={buyList.length}
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
          {buyList.map((item) => (
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
