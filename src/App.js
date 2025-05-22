import "./App.css";
import Button from "./component/button/Button";


function App() {
  function handleClick() {
  alert("Button clicked!");
}
  return (
    <div className="App">
      <Button content={"Login"} bgClr={"blue"} />
      <Button content={"Submit"}  bgClr={"red"}/>
      <Button  padding={"10px 20px"} content={"click"} clk={handleClick}/>
      <Button content={"Add to cart"} border={"none"} clr={"navy"} />
    </div>
  );
}

export default App;
