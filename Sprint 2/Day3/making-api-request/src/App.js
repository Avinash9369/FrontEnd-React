import './App.css';
import { useState } from "react"

let getData = async (url) => {
  let res = await fetch(url);
  let data = res.json();
  return data;
};

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);

  let getDataHandler = async () => {
    let users = await getData("https://reqres.in/api/users?page=1")
    setData(users.data)
    setLoading(false);
  }
  if (loading) {
    return <h1>Please wait, Loading....</h1>;
  }

  return (
    <>
    <button onClick={getDataHandler}>GET DATA</button>
      <div className="App" style={{ display: "flex", justifyContent: "center", gap: "10px", padding: "10px" }}>
      {
        data.map((ele)=>(
          <div>
            <img src={ele.avatar} />
            <p>{ele.first_name}</p>
          </div>
        )
        )
      }
    </div>
    </>
  );
   
}

export default App;
