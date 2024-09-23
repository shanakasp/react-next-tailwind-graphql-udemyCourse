import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = (props) => {
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent user={props.user}></ChildComponent>
    </div>
  );
};

export default ParentComponent;
