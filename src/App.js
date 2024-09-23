import React from "react";
import "./App.css";
import ParentComponent from "./ParentComponent";
import { userContext } from "./UserContext";

function App() {
  const user = { name: "john", age: "30" };

  return (
    <div className="App">
      <h1>Context Hook Example</h1>
      <userContext.Provider value={user}>
        <ParentComponent />
      </userContext.Provider>
    </div>
  );
}

export default App;
