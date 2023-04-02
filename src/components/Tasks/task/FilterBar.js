import classes from "./FilterBar.module.css";
import React from "react";
import { useSelector } from "react-redux";

const FilterBar = (props) => {
  const taskCategories = useSelector(
    (state) => state.task.categories
  );
  const allCategory = [
    {
      title: "all",
      color: "#04c582",
    },
    ...taskCategories,
  ];
  return (
    <div className={classes.filter}>
      {allCategory.map((caterory) => (
        <button
          key={caterory.title}
          onClick={() => {
            props.toFilter(caterory.title);
          }}
          style={{ backgroundColor: caterory.color }}
        >
          <span>{caterory.title}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
