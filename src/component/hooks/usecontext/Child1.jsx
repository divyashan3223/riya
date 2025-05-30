import { useContext } from "react";
import { Child2 } from "./Child2";
import { DataContext } from "./Parent";

export const Child1 = () => {
  let value = useContext(DataContext);
  return (
    <div>
      <h2>child1 ---{value.age} </h2>

      <Child2 />
    </div>
  );
};
