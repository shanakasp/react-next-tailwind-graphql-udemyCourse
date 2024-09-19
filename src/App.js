import "./App.css";
import Greetings from "./Greetings";
import MyForm from "./MyForm";
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
      <MyForm></MyForm>
    </div>
  );
}

export default App;
