import Navbar from "./Components/Navbar";
import "./Components/DesktopNav";
import Home from "./Components/Home";
import About from "./Components/About";
import RunningStory from "./Components/RunningStory";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RestaurantMenu from "./Components/ReactProjects/ReactProjects1/RestaurantMenu";
// import Items from './Data';
import items from "/Users/Lucinda/react-profile2/src/Components/ReactProjects/ReactProjects1/Data.jsx";
import Menu from './Components/ReactProjects/ReactProjects1/Menu';

import ReactProjects2 from "./ReactProjects2/index2";

// //I have error from below, trying to add stuff to make my reactproject 2 show up
// import ReactProjects2 from  './Components/ReactProjects/ReactProjects2';
// Import the new FoodOrderingApp component

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/running-story" element={<RunningStory />} />
          <Route path="/ReactProjects/ReactProjects1" element={<RestaurantMenu items={items} />} />
          <Route path="/ReactProjects2/" element={<ReactProjects2 />} /> 
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