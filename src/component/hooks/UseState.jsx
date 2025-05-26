import { useState } from "react";

const Home = () => {
  
function handleClick() {
setNum(num=>num-5)
}

  const [num, setNum] = useState(100);
  return <div>
    <p>Number:{num}</p>
    <button onClick={()=>setNum(num+10)}>+</button>
    <button onClick={handleClick}>-</button>
  </div>;
};

export default Home;
