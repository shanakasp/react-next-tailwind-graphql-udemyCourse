import React from "react";

function Names() {
  const names = ["name1", "name2", "name3"];
  return (
    <div>
      {names.map((name) => (
        <div>{name}</div>
      ))}
    </div>
  );
}

export default Names;
