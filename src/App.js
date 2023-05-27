import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { UserToDoList } from "./UserToDoList";
function App() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((result) => setTodo(result.data));
  }, []); //[] only fires once when the component loads

  return (
    <>
      {todo == null ? <h1>no data found</h1> : <UserToDoList todoList={todo} />}
    </>
  );
}

export default App;
