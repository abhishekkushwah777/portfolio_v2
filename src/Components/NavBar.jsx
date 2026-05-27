import { useState } from "react";
import "../Styles/NavBar.css"
import Moon from "./public/Icons/moon-02-stroke-rounded.svg?react";
import Sun from "./public/Icons/sun-01-stroke-rounded.svg?react";

function NavBar() {
    const [darkMode, setDarkMode] = useState(false);

    const ToggleDarkmode = () => {
      document.body.classList.toggle("DarkMode");
  
      setDarkMode(!darkMode);
    };
    return (
        <div className="navBar">
           <div className="left">
            <button onClick={ToggleDarkmode}>
                <img 
                src={darkMode ? "/Icons/moon-02-stroke-rounded.svg" : "/Icons/sun-01-stroke-rounded.svg"} alt="" />
            </button>
           </div>
           <div className="middle">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
           </div>
           <div className="right">
            <button>Download CV</button>
            <button>Hire Me</button>
           </div>
        </div>
    )
}

export default NavBar;