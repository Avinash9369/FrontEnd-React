
import './App.css';

const person1 = {
  name: "John Doe",
  age: 30,
  hobbies: ["Reading", "Writing", "Coding"],
  phone: {
  landline: "555-1234",
  mobile: "9000000000",
  },
  image: "https://picsum.photos/200",
  isMarried: true,
}

const person2 = {
  name: "Alexa Queen",
  age: 26,
  hobbies: ["Surfing", "Travel", "Sports"],
  phone: {
  landline: "555-5678",
  mobile: "09090909090",
  },
  image: "https://picsum.photos/200",
  isMarried: false,
 };

function App() {
  return (
    <div className="App">
      <div className='card1'>
      <img src={person1.image} alt={person1.name}/>
      <h2>{person1.name}</h2>
      <p>Age: {person1.age}</p>
      <div>
        <h3>Hobbies</h3>
        <ol>
          <li>{person1.hobbies[0]}</li>
          <li>{person1.hobbies[1]}</li>
          <li>{person1.hobbies[2]}</li>
        </ol>
      </div>
      <p>Mobile : {person1.phone.mobile}</p>
      <p>Landline : {person1.phone.landline}</p>
      <p>Is Married : Yes</p>
      </div>
      <div className='card2'>
      <img src={person2.image} alt={person2.name}/>
      <h2>{person2.name}</h2>
      <p>Age: {person2.age}</p>
      <div>
        <h3>Hobbies</h3>
        <ol>
          <li>{person2.hobbies[0]}</li>
          <li>{person2.hobbies[1]}</li>
          <li>{person2.hobbies[2]}</li>
        </ol>
      </div>
      <p>Mobile : {person2.phone.mobile}</p>
      <p>Landline : {person2.phone.landline}</p>
      <p>Is Married : Yes</p>
      </div>
    </div>
  );
}

export default App;
