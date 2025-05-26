import { useEffect, useState } from "react";

// !useEffect
// useEffect(()=>{},[count1])
// all state change rerender ()=>{}
//  initial stage rerender  []
// state change only change ()=>{},[state,prop]

const UseEffect = () => {
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(15);
  const [count3, setCount3] = useState(20);

  useEffect(() => {
    return console.log("hey im runing backside");
  },[count2]);
  return (
    <div>
      <h1>count1:{count1}</h1>
      <button onClick={() => setCount1((c) => c + 1)}>+</button>
      <button onClick={() => setCount1((c) => c - 1)}>-</button>
      <hr />
      <hr />
      <h1>count2:{count2}</h1>
      <button onClick={() => setCount2((c) => c + 1)}>+</button>
      <button onClick={() => setCount2((c) => c - 1)}>-</button>
      <hr />
      <hr />
      <h1>count3:{count3}</h1>
      <button onClick={() => setCount3((c) => c + 1)}>+</button>
      <button onClick={() => setCount3((c) => c - 1)}>-</button>
      <hr />
      <hr />
    </div>
  );
};

export default UseEffect;
