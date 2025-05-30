import { useContext } from "react";
import  {DataContext}  from "./Parent";

const Child3 = () => {
  let {name} = useContext(DataContext);
  return <div>Child3 {name}</div>;
};

export default Child3;
