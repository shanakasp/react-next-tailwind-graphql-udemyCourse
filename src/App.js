import "./App.css";
import Card from "./Card";
import Greetings from "./Greetings";
import LoginForm from "./LoginForm";
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
      <Greetings username=" user ABCD"></Greetings>
      <button onClick={buttonClick}>Click me</button>
      <MyForm></MyForm>
      <Card
        name=" hello im shanaka"
        bio=" Hello HEllo this is bio"
        image="https://www.supercars.net/blog/wp-content/uploads/2022/09/Best-New-Sports-and-Performance-Cars-2022_Chevrolet_Corvette.jpg"
      ></Card>

      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
