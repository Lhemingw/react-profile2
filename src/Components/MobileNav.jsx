import Navbar from "./Navbar";
import './Navbar.css';
 import { TiThMenu } from "react-icons/ti";
import {useState} from "react";
//  import Navlinks from "src/Components/Navbar.css";
//  import "./Users/Lucinda/react-profile2/src/Components/Navbar.css"


 
//the state above is initialized to "false"

 function MobileNavigation () {
//      const Hamburger = <TiThMenu className="HamburgerMenu"
//  size="30px" 
//   color="black" 
//   onClick={() => setClick(!click)} />

//      const [click, setClick] = useState(false);

//     const toggleMenu = () => setClick(!click);
 

     return(
        <div>
            
        <nav className="MobileNavigation">
        {/* <h2 className="logo">LightBringer</h2> */}
        
        <Navbar />
        
    </nav>
    </div>
     )
 }

 export default MobileNavigation;

 // Note that NavBar.css and NavLinks.js are imported here
