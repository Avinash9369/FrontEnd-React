import "./App.css"
import User from "./components/User";

let users = [
  {
    id: 1,
    name: "Vijay Shekhar Sharma",
    role: "Founder & CEO",
    url: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Vijay_Shekhar_Sharma_Paytm_96f52579b8.jpg",
  },
  {
    id: 2,
    name: "Kunal Shah",
    role: "Founder",
    url: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Rectangle_427_637d69bb57.png",
  },
  {
    id: 3,
    name: "Amrish Rau",
    role: "CEO",
    url: "https://masai-website-images.s3.ap-south-1.amazonaws.com/amrish_rau_pine_labs_144e5e587c.jpg",
  },
  {
    id: 4,
    name: "Amrish Rau",
    role: "CEO",
    url: "https://masai-website-images.s3.ap-south-1.amazonaws.com/amrish_rau_pine_labs_144e5e587c.jpg",
  },
];
export default function App() {
  return (
    <div className="App"> 
      {users.map((ele) => (
        <User key={ele.id} name={ele.name} url={ele.url} role={ele.role} />
      ))}
    </div>
  );
}  

// function App() {
//   return (
//     <div className="App">
//       <h1>In this we discuss how to display multiple components</h1>
//     </div>
//   );
// }

// export default App;
