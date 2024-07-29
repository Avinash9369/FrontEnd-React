import "./App.css";
import { useState } from "react";
import TodoItem from "./components/TodoItem";
import { AddTodo } from "./components/AddTodo";

//list of todo: []

function App() {
  let [todos, setTodos] = useState([]);
  
  let handleTodoAdd=(inputValue)=>{
    let newTodo={
      id:Math.random()*Date.now(),
      title:inputValue,
      status:false
    }
    let updatedTodos=[...todos,newTodo]
    setTodos(updatedTodos)
  }

  return (
    <div className="App">
      <AddTodo handleTodoAdd={handleTodoAdd} />

      {todos.map((ele) => (
        <TodoItem key={ele.id} {...ele} />
      ))}
    </div>
  );
}

export default App;
