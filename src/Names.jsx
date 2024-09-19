import React from "react";

function Names() {
  const names = ["name11", "name2", "name3"];
  return (
    <div>
      {names.map((name, index) => (
        <div key={index}>{name}</div>
      ))}
    </div>
  );
}

export default Names;

// import React from "react";

// function Names() {
//   const names = ["name1", "name2", "name3"];

//   const renderNames = () => {
//     return names.map((name) => <div>{name}</div>);
//   };
//   return <div>{renderNames()}</div>;
// }

// export default Names;
