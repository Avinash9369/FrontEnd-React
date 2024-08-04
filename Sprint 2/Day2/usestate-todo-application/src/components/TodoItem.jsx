function TodoItem(props) {
    let { title, status, id, handleTodoUpdate, handleTodoDelete } = props;
    return (
        <div>
            <h1>{title}</h1>
            <p>{status ? "Completed" : "Pending"}</p>
            <button
                onClick={() => {
                    handleTodoUpdate(id);
                }}
                style={{ backgroundColor: "grey" }}
            >
                Toggle
            </button>
            <button
                onClick={() => {
                    handleTodoDelete(id);
                }}
                style={{ backgroundColor: "red" }}
            >
                Delete
            </button>
        </div>
    );
}

export default TodoItem;
