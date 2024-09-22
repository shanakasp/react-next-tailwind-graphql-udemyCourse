import React from "react";

const Card = (props) => {
  return (
    <div>
      <img src={props.image}></img>
      <h2>{props.name}</h2>
      <h3>{props.bio}</h3>
    </div>
  );
};

export default Card;
