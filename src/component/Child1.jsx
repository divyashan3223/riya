import { memo } from "react";

const child1 = ({ data }) => {
  console.log("child one Runing");

  return (
    <div>
      child1
      <h1>count1 value:{data}</h1>
    </div>
  );
};

export default memo(child1);
