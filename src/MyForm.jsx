import React, { useState } from "react";

const MyForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form submitted with name:", name);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Enter Your Name"
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
