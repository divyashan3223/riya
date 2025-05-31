import axios from "axios";
import React, { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [title, setTitle] = useState(null);


// TODO  only get method
//   useEffect(() => {
//     axios.get(url).then((res) => setTitle(res.data));
//   });

//? Post method'

  axios.post(url, {
    title: "foo",
    body: "bar",
    userId: 1,
  })
  return [title];
};

export default UseFetch;
