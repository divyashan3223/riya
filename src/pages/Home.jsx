import Child2 from "../component/Child2";
import Child1 from "../component/Child1";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import { useState } from "react";

const Home = () => {
  console.log("home page running");

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "98vh",
        justifyContent: "space-between",
      }}
    >
      <NavBar />

      <h1>count:{count}</h1>
      <button onClick={handleClick}>click</button>

      <Child1 data={count} />
      <Child2 />

      <Footer />
    </div>
  );
};

export default Home;
