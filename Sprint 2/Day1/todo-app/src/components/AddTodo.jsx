import { useState } from "react";

export function AddTodo({ handleTodoAdd }) {
  let [inputValue, setInputValue] = useState("");

  let addTodoHandler = () => {
    handleTodoAdd(inputValue);
  };

  return (
    <div>
      <h1
        style={{
          fontFamily: "Courier New",
          color: "rgb(5, 88, 170)",
        }}
      >
        TODO APPLICATION
      </h1>
      <input
        style={{ padding: "3px 7px" }}
        type="text"
        value={inputValue}
        placeholder="Enter Todo"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      {/* addEventListener("change", ()=>{}) */}
      <button
        onClick={addTodoHandler}
        style={{
          border: "none",
          padding: "5px 10px",
          backgroundColor: "lime",
          borderRadius: "2px",
        }}
      >
        Add
      </button>
    </div>
  );
}
