import React, { useState, Link} from "react";
import "./Navbar.css";
import { TiThMenu } from "react-icons/ti";
// import { Link, NavLink } from "react-router-dom";
const NavLinks = () => {
    // const Hamburger = <TiThMenu className="HamburgerMenu"
    // size="30px" 
    //  color="black" 
    //  onClick={() => setClick(!click)} />
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
  
    return (
      <nav className="NavLinks">
        <h2 className="logo">LightBringer</h2>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <TiThMenu className="HamburgerMenu" size="30px" color="black" />
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/" className="nav-links" onClick={closeMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="/#RunningStory" className="nav-links" onClick={closeMenu}>RunningStory</a>
          </li>
          <li className="nav-item">
            <a href="/#about" className="nav-links" onClick={closeMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="/ReactProjects" className="nav-links" onClick={closeMenu}>ReactProjects</a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default NavLinks;


