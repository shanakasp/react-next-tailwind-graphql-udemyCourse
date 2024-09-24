import React from "react";
import "./App.css";
import Counter from "./Counter";
import CounterReducer from "./CounterReducer";
import ParentComponent from "./ParentComponent";
import UseRef from "./UseRef";
import { userContext } from "./UserContext";

function App() {
  const user = { name: "john", age: "30" };

  return (
    <div className="App">
      <h1>Context Hook Example</h1>
      <userContext.Provider value={user}>
        <ParentComponent />
      </userContext.Provider>

      <Counter />
      <CounterReducer></CounterReducer>
      <UseRef />
    </div>
  );
}

export default App;
