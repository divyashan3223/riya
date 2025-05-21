import "./App.css";
import Button from "./component/button/Button";
// import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Button  data={'add to cart'} bgClor={"red"}/>
      <Button data={'cancel'} bgClor={"yellow"} />
      <Button data={'submit'} clr={"red"} />
    </div>
  );
}

export default App;
 