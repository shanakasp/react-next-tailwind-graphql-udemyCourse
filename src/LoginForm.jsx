import React, { useState } from "react";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  console.log(`Username : ${userName} and Password : ${password}`);
  return (
    <div>
      <label>
        User Name:{" "}
        <input
          type="text"
          name="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>

      <label>
        User Password:{" "}
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
    </div>
  );
};

export default LoginForm;
