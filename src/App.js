import Navbar from "./Components/Navbar";
import "./Components/DesktopNav";
// import Navbar from './../Components/NavBar/NavBar';
import Home from "./Components/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

    </div>
  );
}

export default App;

//The import statement above is different from other imports 
//you have done so far because App.js lives outside 
//the NavBar container you created for this navigation menu.