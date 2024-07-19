import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>In this we discuss about conditionally-rendering</h1>
      {1 == 1 ? <h1>True Statement</h1> : <h1>False Statement</h1>}
    </div>
  );
}

export default App;

//Example 1:

// export default function App() {
//   let isAdmin = true;

//   let loginStyle = {
//     backgroundColor: "blue",
//     color: "white",
//   };
//   let invalidStyle = {
//     backgroundColor: "red",
//     color: "white",
//   };

//   let username = "admin";
//   let password = "12344";

//   return (
//     <div className="App">
//       {isAdmin ? (
//         <h1>Logged In Successfully</h1>
//       ) : (
//         <h1>Invalid admin credentials</h1>
//       )}

//       {username == "admin" && password == "1234" ? (
//         <h1 style={loginStyle}>Logged in Successfully</h1>
//       ) : (
//         <h1 style={invalidStyle}>
//           Invalid username and password, redirected to login page
//         </h1>
//       )}
//     </div>
//   );
// }
