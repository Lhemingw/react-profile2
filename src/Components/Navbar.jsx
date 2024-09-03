import React, { useState } from "react";
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import "./Navbar.css";
import "./DesktopNav.jsx"

// import { Link, NavLink } from "react-router-dom";


const NavLinks = () =>{
  return(
      <nav className="NavLinks">
      <ul>
          <h2 className="logo">LightBringer</h2>
          <li>
              <a href="/">Home</a>
          </li>
          <li>
              <a href="/#services">Services</a>
          </li>
          <li>
              <a href="/#about">About</a> 
              {/* Resume, awards, and ect goes here */}
          </li>
          <li>
              <a href="/ReactProjects">ReactProjects</a>
          </li>
      </ul>
  </nav>
  )
}

export default NavLinks;

