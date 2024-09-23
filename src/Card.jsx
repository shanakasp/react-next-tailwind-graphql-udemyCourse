import PropType from "prop-types";
import React from "react";

const Card = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "20px",
        backgroundColor: "#D3F3EF",
        borderRadius: "10px",
      }}
    >
      <img
        style={{ width: "50%", margin: "20px", borderRadius: "10px" }}
        src={props.image}
      ></img>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {" "}
        <h2>{props.name}</h2>
        <h3>{props.bio}</h3>
      </div>
    </div>
  );
};

Card.PropType = {
  image: PropType.string.isRequired,
  name: PropType.string.isRequired,
  bio: PropType.string.isRequired,
};
export default Card;
