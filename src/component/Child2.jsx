import React, { memo } from "react";

const Child2 = ({ title, click }) => {
  console.log("child 2 running");

  return (
    <div>
      <h1>count 2 value</h1>
      <h1>{title}</h1>
      <button onClick={click}>count 2 add</button>
    </div>
  );
};

export default memo(Child2);
