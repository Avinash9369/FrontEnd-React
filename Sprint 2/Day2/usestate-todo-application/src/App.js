import './App.css';
import { useState } from 'react';
import TodoItem from './components/TodoItem';
import NoTodos from './components/NoTodo';
import AddTodo from './components/AddTodos';
function App() {
  let [todos, setTodos] = useState([])

  let handleTodoAdd = (inputValue) => {
    let newTodo = {
      id: Math.random() * Date.now(),
      title: inputValue,
      status: false
    }
    let updateTodos = [...todos, newTodo]
    setTodos(updateTodos)
  }

  let handleTodoUpdate=(id)=>{
    let updatedTodos = todos.map((ele) => {
      return ele.id == id
        ? {
          ...ele,
          status: !ele.status,
        }
        : ele;
    });
    setTodos(updatedTodos);
  };

  let handleTodoDelete =(id)=>{
    let updatedTodos = todos.filter((ele) => {
      return ele.id != id;
    });
    setTodos(updatedTodos);
  }
 
  return (

    <div className="App">
      <AddTodo handleTodoAdd={handleTodoAdd} />
      {todos.length > 0 ?
        (todos.map((ele) => (
          <TodoItem
            key={ele.id}
            title={ele.title}
            status={ele.status}
            id={ele.id}
            handleTodoUpdate={handleTodoUpdate}
            handleTodoDelete={handleTodoDelete}
          />
        ))
        ) : (
          <NoTodos />
        )}


    </div>
  );
}

export default App;
