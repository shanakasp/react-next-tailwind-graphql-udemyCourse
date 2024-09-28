import React, { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Counter";
import CounterReducer from "./CounterReducer";
import ParentComponent from "./ParentComponent";
import UseRef from "./UseRef";
import { userContext } from "./UserContext";

function App() {
  const user = { name: "john", age: "30" };

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  return (
    <div className="App">
      <h1>Context Hook Example</h1>
      <userContext.Provider value={user}>
        <ParentComponent />
      </userContext.Provider>

      <Counter />
      <CounterReducer></CounterReducer>
      <UseRef />
      {data && data.map((item) => <p key={item.id}>{item.title}</p>)}
    </div>
  );
}

export default App;
