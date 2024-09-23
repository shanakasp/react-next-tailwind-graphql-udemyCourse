import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <h1>Child Component</h1>
      <label>Name : {props.user.name}</label>
      <label>Age : {props.user.age}</label>
    </div>
  );
};

export default ChildComponent;
