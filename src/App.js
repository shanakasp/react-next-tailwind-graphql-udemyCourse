import "./App.css";
import Greetings from "./Greetings";
import Names from "./Names";
import WElcome from "./WElcome";

function App() {
  const buttonClick = () => {
    alert("Hello World");
  };

  return (
    <div className="App">
      <WElcome></WElcome>
      <Names></Names>
      <Greetings></Greetings>
      <button onClick={buttonClick}>Click me</button>
    </div>
  );
}

export default App;
