import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyAction } from "../../../store/BuySlice";
import { uiAction } from "../../../store/UiSclice";
import ChartBar from "../progress/ChartBar";
import AddBuyForm from "./AddBuyForm";

import BuyButton from "./BuyButton";
import classes from "./BuyList.module.css";

const BuyListBar = (props) => {
  const addBuy = useSelector((state) => state.ui.addBuy);

  const dispatch = useDispatch();
  const buyList = useSelector((state) => state.buy.list);

  const setDoneHandler = (id) => {
    dispatch(buyAction.setToBuy(id));
  };
  const addFormHandler = () => {
    dispatch(uiAction.toggleAddBuy());
  };

  return (
    <div className={classes.buy}>
      {!addBuy && (
        <div className={classes.charbar}>
          <ChartBar
            border={false}
            value={
              buyList.filter((item) => item.bought === true).length
            }
            maxValue={buyList.length}
          />
        </div>
      )}
      <div className={classes.buyListTotal}>
        <div className={classes.taskHead}>
          {addBuy ? <span>Add Item</span> : <span>Buy list</span>}

          <button
            onClick={addFormHandler}
            className={classes.addButton}
          >
            {!addBuy ? (
              <ion-icon name="add-outline"></ion-icon>
            ) : (
              <ion-icon name="arrow-back-outline"></ion-icon>
            )}
          </button>
        </div>
        {!addBuy ? (
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
        ) : (
          <AddBuyForm />
        )}
      </div>
    </div>
  );
};

export default BuyListBar;
