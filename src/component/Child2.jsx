import React, { memo } from "react";

const Child2 = () => {
  console.log("child 2 running");

  return <div>Child2</div>;
};

export default memo(Child2);
