import React, { useState} from "react";
import "./Navbar.css";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
const NavLinks = () => {
   
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <nav className="Navbar">
        <div className="navbar-container">
        <h2 className="logo">LightBringer</h2>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        
        </div>
         
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <Link to="/" onClick={closeMenu}>Home</Link></li>

        <li className="nav-item">
            <Link to="/about" onClick={closeMenu}>About</Link></li>

        <li className="nav-item ">
          <Link to="/RunningStory" onClick={closeMenu}>RunningStory</Link></li>

         
          {/* <li className="nav-item">
          <span onClick={toggleDropdown}>ReactProjects</span>
           {isDropdownOpen && (
             <ul className="dropdown-menu">
            </li><Link to="/Users/Lucinda/react-profile2/src/Components/ReactProjects" onClick={closeMenu}>ReactProjects</Link> */}
          <li className="nav-item dropdown">
           <span onClick={toggleDropdown} className="bold-text">ReactProjects</span>
           {isDropdownOpen && (
             <ul className="dropdown-menu">
               <li><Link to="/Users/Lucinda/react-profile2/src/Components/ReactProjects/project1" onClick={closeMenu}>Project 1</Link></li>
               <li><Link to="/Users/Lucinda/react-profile2/src/Components/ReactProjects/project2" onClick={closeMenu}>Project 2</Link></li>
               <li><Link to="/Users/Lucinda/react-profile2/src/Components/ReactProjects/project3" onClick={closeMenu}>Project 3</Link></li>
        </ul>
    )}
    </li>
  </ul>
      
      </nav>
    );
  };
  
  export default NavLinks;


