// fetch('api')
//

import { useEffect } from "react";
import { useState } from "react";

const UseEffect = () => {

    const[title,setTitle]=useState('')
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => data.map((item) => setTitle(item.title)));
  });
  return <div>
    <h1>title{title}</h1>
  </div>;
};


export default UseEffect;
