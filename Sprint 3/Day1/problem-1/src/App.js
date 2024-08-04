import './App.css';
import { useState } from "react"

function Counter() {
  const [value, setValue] = useState(0)

  function clickIncHandle() {
    setValue(value + 1)
  }
  function clickDecHandle() {
    setValue(value -1)
  }
  function clickReHandle(){
    setValue(0)
  }
  return (
    <div className="counte">
      <h2>Count : {value}</h2>
      <button  onClick={clickIncHandle}>INC</button>
      <button onClick={clickDecHandle}>DEC</button>
      <button onClick={clickReHandle}>RESET</button>
    </div>
  )
}

// function Todo({value}){

//   const[todo,setTodo]=useState("")

//   function addTodoHanler(){
//     setTodo(todo)
//   }

//   return(
//     <div className='todoo'>
//       <h2>Todo List</h2>
//       <input  value={value} placeholder='Enter the todo'></input>
//       <button onClick={addTodoHanler}>ADD</button>
//       <div></div>

//     </div>
//   )
// }

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodoHandler = () => {
    setTodos([...todos, todo]);
    setTodo(""); // Clear the input after adding
  };

  return (
    <div className="todoo">
      <h2>Todo List</h2>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Enter the todo" />
      <button onClick={addTodoHandler}>ADD</button>
      <div style={{border:"2px solid red",width:"50%",margin:"auto"}}>
        <ol style={{ color: "red",textAlign:"left"}}>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter/>
      <Todo/>
    </div>
  );
}

export default App;
