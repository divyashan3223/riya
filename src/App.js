import "./App.css";
import Todos from "./component/hooks/customHook/Todos";
import Posts from "./component/hooks/UseEffect";

function App() {
  return (
    <div className="App">
      <Posts />
      <Todos />
    </div>
  );
}

export default App;
