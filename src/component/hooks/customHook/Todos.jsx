import UseFetch from "./UseFetch";

const Todos = () => {
  const [todos] = UseFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      <h1>Todos Title</h1>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
