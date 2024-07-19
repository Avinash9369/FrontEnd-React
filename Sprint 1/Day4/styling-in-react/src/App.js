import "./App.css";
import UserProfileDetails from "./components/UserProfileDetails";

let inlineStyle = {
  color: "red",
  backgroundColor: "beige",
  padding: "10px",
  fontSize: "20px",
};

function App() {
  return (
    <div className="App">
      {/* <h1
        style={{
          color: "red",
          backgroundColor: "yellow",
          padding: "10px",
          fontSize: "20px",
        }}
      > */}
      {/* Welcome to Inline Style
      </h1> */}
      <h1 style={inlineStyle}>Welcome to Normal Style</h1>
      <h3 style={inlineStyle}>I'm paragraph</h3>
      <UserProfileDetails name="Rakesh" city="Noida" />
    </div>
  );
}

export default App;

/*
style: 
inline style
normal style (using external css)
module css
*/
