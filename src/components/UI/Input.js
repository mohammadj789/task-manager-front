import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <>
      <label
        htmlFor={props.lableContent}
        className={props.lableClass}
      >
        {props.lableContent}
      </label>
      <input
        ref={ref}
        id={props.lableContent}
        className={props.inputClass}
        type={props.inputType}
      />
    </>
  );
});

export default Input;
