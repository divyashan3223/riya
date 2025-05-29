import { memo } from "react";

const child1 = ({ title, click }) => {
  console.log("child one Runing");

  return (
    <div>
      <h1>count 1 value</h1>
      <h1>{title}</h1>
      <button onClick={click}>count 1 add</button>
    </div>
  );
};

export default memo(child1);
