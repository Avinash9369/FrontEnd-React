import './App.css';
import MobileInfo from './components/mobileInfo/MobileInfo';
import Courses from './components/courses/Courses';
import User from './components/users/User';

function App() {
  return (
    <div className="App">
      <h1 className="heading"> This app contains different components like MobileInfo, Courses, Users.</h1>
      <MobileInfo/>
      <Courses/>
      <User/>
    </div>
  );
}

export default App;
