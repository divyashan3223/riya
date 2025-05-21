import "./App.css";
import Button from "./component/button/Button";
// import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Button  data={'add to cart'}/>
      <Button data={'cancel'} />
      <Button data={'submit'} />
    </div>
  );
}

export default App;
 