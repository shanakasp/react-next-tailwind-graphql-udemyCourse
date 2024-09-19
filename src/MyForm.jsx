import React from "react";

const MyForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
    console.log("Form submitted");
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
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
