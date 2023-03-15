import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.30.10:8080/api/")
      .then((response) => setTodos(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>TODO List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong>
            <p>{todo.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
