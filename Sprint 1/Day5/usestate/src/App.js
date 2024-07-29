import "./App.css";
import { useState } from "react";

function Button(props) {
  return <button onClick={props.avinashHandler}>Count: {props.count}</button>;
}

function App() {
  let [count, setCount] = useState(0);
  return (
    <div className="App">
      <Button avinashHandler={() => setCount(count + 1)} count={count} />
      <Button avinashHandler={() => setCount(count + 1)} count={count} />
    </div>
  );
}

export default App;
