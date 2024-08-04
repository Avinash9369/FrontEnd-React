import { useState } from "react";

function AddTodo(props) {
  let { handleTodoAdd } = props;

  let [inputValue, setInputValue] = useState("");

  let addTodoHandler = () => {
    handleTodoAdd(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter Todo"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      {/* addEventListener("change", ()=>{}) */}
      <button onClick={addTodoHandler}>Add</button>
    </div>
  );
}

export default AddTodo;
