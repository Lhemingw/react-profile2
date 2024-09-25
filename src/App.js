import Navbar from "./Components/Navbar";
import "./Components/DesktopNav";
import Home from "./Components/Home";
import About from "./Components/About";
import RunningStory from "./Components/RunningStory";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RestaurantMenu from "./Components/ReactProjects/ReactProjects1/RestaurantMenu";
// import Items from './Data';
import Items from "/Users/Lucinda/react-profile2/src/Components/ReactProjects/ReactProjects1/Data.jsx";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant-menu" element={<RestaurantMenu />} />
          <Route path="/restaurant-menu" element={<Items />} />
          {/* Add other routes as needed */}
        </Routes>
      {/* <Home /> */}
    </div>
  </BrowserRouter>
  );
}

export default App;

//The import statement above is different from other imports 
//you have done so far because App.js lives outside 
//the NavBar container you created for this navigation menu.