import { createContext } from "react";
import { Child1 } from "./Child1";

export let DataContext = createContext();
export const Parent = () => {
  return (
    <div>
      <DataContext.Provider value={{ name: "Divii", age: 25 }}>
        <h1> parent</h1>
        <Child1/>
      </DataContext.Provider>
    </div>
  );
}; 
