 //DesktopNavigation.js

 import Navbar from "./Navbar";
 import './Navbar.css';
//  import Navlinks from "src/Components/Navbar.css";
//  import "./Users/Lucinda/react-profile2/src/Components/Navbar.css"

 function DesktopNavigation () {
    // console.log ("hello");
     return(
        <nav className="DesktopNavigation">
        {/* <h2 className="logo">LightBringer</h2> */}
        
        <Navbar />
        
    </nav>
     )
 }

 export default DesktopNavigation;

 // Note that NavBar.css and NavLinks.js are imported here
