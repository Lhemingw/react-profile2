import Navbar from "./Components/Navbar";
import "./Components/DesktopNav";
import Home from "./Components/Home";
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Home />
    </div>
  </BrowserRouter>
  );
}

export default App;

//The import statement above is different from other imports 
//you have done so far because App.js lives outside 
//the NavBar container you created for this navigation menu.