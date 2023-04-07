import React, { useState } from "react";
import { useSelector } from "react-redux";
import BackDrop from "./BackDrop";
import classes from "./Category.module.css";
import CategoryModal from "./CategoryModal";

const Category = () => {
  const categories = useSelector((state) => state.task.categories);
  const [Modal, setModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const addHandler = () => {
    setModal(true);
    setSelected(null);
  };

  const selectHandler = (id, e) => {
    setModal(true);
    setSelected(id);
  };

  return (
    <div className={classes.main}>
      <button onClick={addHandler}>
        <ion-icon name="add-outline"></ion-icon>
      </button>

      {categories.map((cat) => (
        <button
          onClick={selectHandler.bind(null, cat.id)}
          key={cat.id}
          style={{ backgroundColor: cat.color }}
        >
          {cat.title}
        </button>
      ))}
      {Modal && (
        <BackDrop
          onClick={() => {
            setModal(false);
          }}
        />
      )}
      {Modal && <CategoryModal id={selected} onclose={setModal} />}
    </div>
  );
};

export default Category;
