import React from "react";

const Input = (props) => {
  return (
    <input
      name={props.name}
      id={props.id}
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;
