import "./App.css";
import Button from "./component/button/Button";

function App() {
  return (
    <div className="App">
      <Button content={"Login"} />
      <Button content={"Submit"} />
      <Button />
      <Button content={"Add to cart"} />
    </div>
  );
}

export default App;
