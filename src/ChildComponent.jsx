import React, { useContext } from "react";
import { userContext } from "./UserContext";

const ChildComponent = () => {
  const user = useContext(userContext);

  return (
    <div>
      <h1>Child Component</h1>
      <label>Name: {user.name}</label>
      <br />
      <label>Age: {user.age}</label>
    </div>
  );
};

export default ChildComponent;
