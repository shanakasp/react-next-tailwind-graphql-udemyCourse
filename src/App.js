import "./App.css";
import ParentComponent from "./ParentComponent";

function App() {
  const user = { name: "john", age: "30" };
  return (
    <div className="App">
      <h1>Context hook</h1>
      <ParentComponent user={user}></ParentComponent>
    </div>
  );
}

export default App;
