import { useEffect } from "react";
import { useState } from "react";
import UseFetch from "./UseFetch";

const Todos = () => {

  let [title] = UseFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <div>
      <h1>todos title</h1>
      <ul>
        { title && title.map((item, index) => {
          return <li id={index}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todos;
