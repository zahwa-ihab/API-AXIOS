export function UserToDoList({ todoList }) {
  return (
    <>
      <h1> here's ur list</h1>

      {todoList.map((todo) => (
        <div>
          {todo.title}
          <input type="checkbox" checked={todo.completed}></input>
        </div>
      ))}
    </>
  );
}
