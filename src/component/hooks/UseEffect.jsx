// fetch('api')
//

import UseFetch from "./customHook/UseFetch";

const Posts = () => {
  let [title] = UseFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      <h1>posts title</h1>
      <ul>
        {title &&
          title.map((item, index) => {
            return <li id={index}>{item.title}</li>;
          })}
      </ul>
    </div>
  );
};

export default Posts;
