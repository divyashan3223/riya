import "./App.css";
import Button from "./component/button/Button";


function App() {
  function handleClick() {
  alert("Button clicked!");
}
  return (
    <div className="App">
      <Button content={"Login"}  clsName={"login"} />
      <Button content={"Submit"}  clsName={"sub"}/>
      <Button  content={"click"} clk={handleClick}/>
      <Button content={"Add to cart"} />
    </div>
  );
}

export default App;
