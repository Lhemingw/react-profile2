 //DesktopNavigation.js
import React from "react";
 import Navbar from "./Navbar";
 import './Navbar.css';
import MobileNav from "./MobileNav.jsx";
import DesktopNav from "./DesktopNav";

 function DesktopNavigation () {
    // console.log ("hello");
     return(
        <nav className="DesktopNavigation">
        {/* <h2 className="logo">LightBringer</h2> */}
        {/* I had to put my  <DesktopNav />
        <MobileNav /> here because it gave me an endless loop
         */}
        <Navbar />
        {/* <DesktopNav />
        <MobileNav /> */}
        
    </nav>
     )
 }

 export default DesktopNavigation;

 // Note that NavBar.css and NavLinks.js are imported here
