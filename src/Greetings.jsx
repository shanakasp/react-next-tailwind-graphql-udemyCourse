import React from "react";

const Greetings = (props) => {
  const isLoggedIn = true;
  return (
    <div>
      {isLoggedIn ? (
        <h1>Hello and Welcome Back {props.username}</h1>
      ) : (
        <h1>Plz login</h1>
      )}
    </div>
  );
};

export default Greetings;
