function TodoItem({ title, status, id }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{status ? "Completed" : "Pending"}</p>
      <button style={{ backgroundColor: "grey" }}>Toggle</button>
      <button style={{ backgroundColor: "red" }}>Delete</button>
    </div>
  );
}

export default TodoItem;
