import Child2 from "../component/Child2";
import Child1 from "../component/Child1";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import { useCallback, useState } from "react";

const Home = () => {
  console.log("home page running");

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(10);
  const handleClick1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);
  const handleClick2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);
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

      <Child1 title={count1} click={handleClick1} />
      <Child2 title={count2} click={handleClick2} />

      <Footer />
    </div>
  );
};

export default Home;
