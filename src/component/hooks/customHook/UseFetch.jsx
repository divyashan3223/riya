import React, { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [title, setTitle] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTitle(data));
  });
  return [title];
};

export default UseFetch;
