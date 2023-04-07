import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateUniqueId } from "../../helper/generateId";
import { taskAction } from "../../store/TaskSlice";
import classes from "./CategoryModal.module.css";
const CategoryModal = (props) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.task.categories);

  const colorInputRef = useRef();
  const categoryInputRef = useRef();

  const categorySelected = props.id
    ? categories.find((cat) => cat.id === props.id)
    : null;

  const [category, setCategory] = useState(
    categorySelected ? categorySelected.title : ""
  );
  const [color, setColor] = useState(
    categorySelected ? categorySelected.color : "#020202"
  );
  const saveHandler = () => {
    if (categoryInputRef.current.value.trim() === "") return;
    const existing = categories.findIndex(
      (cat) => cat.title === categoryInputRef.current.value.trim()
    );
    if (existing !== -1) {
      dispatch(
        taskAction.updateCategory({
          index: existing,
          color: colorInputRef.current.value,
        })
      );
    } else {
      dispatch(
        taskAction.addCategory({
          title: categoryInputRef.current.value.trim(),
          color: colorInputRef.current.value,
          id: generateUniqueId(),
        })
      );
    }

    props.onclose(false);
  };

  return (
    <div className={classes.Modal}>
      <div className={classes.categoryName}>
        <label htmlFor="name">Category</label>
        <input
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
          ref={categoryInputRef}
          id={"name"}
          type={"text"}
        />
      </div>
      <input
        onChange={(e) => {
          setColor(e.target.value);
        }}
        value={color}
        ref={colorInputRef}
        className={classes.colorinput}
        type={"color"}
      />
      <button className={classes.save} onClick={saveHandler}>
        Save
      </button>
      <button
        onClick={() => props.onclose(false)}
        className={classes.close}
      >
        <ion-icon name="close-outline"></ion-icon>
      </button>
    </div>
  );
};

export default CategoryModal;
