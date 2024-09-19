import React from "react";

const Greetings = () => {
  const isLoggedIn = false;
  return (
    <div>
      {isLoggedIn ? <div>Hello and Welcome Back</div> : <h1>Plz login</h1>}
    </div>
  );
};

export default Greetings;
