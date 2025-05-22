import "./App.css";
import Button from "./component/button/Button";

function App() {
  function handleClick() {
    alert("Button clicked!");
  }
  return (
    <div className="App">
      <Button content={"Login"} clsName={"login"} bgRadius={"20px"} />
      <Button content={"Submit"} clsName={"sub"} />
      <Button content={"click"} clk={handleClick} />
      <Button content={"Add to cart"} bgRadius={"6px"} />
    </div>
  );
}

export default App;
