import { useState } from "react";
import "../Styles/NavBar.css"
import { Link } from "react-router-dom";
import Icon from  "./Icons";
import Button from "./Buttons";

function NavBar() {
    const [darkMode, setDarkMode] = useState(false);

    const ToggleDarkmode = () => {
      document.body.classList.toggle("DarkMode");
      console.log("Dark mode toggled");
  
      setDarkMode(!darkMode);
    };
    return (
        <div className="navBar">
           <div className="left">
           <Button name="icon" onClick= {ToggleDarkmode}
                icon={darkMode ? (
                <Icon name="moon" />
                    ) : (
                <Icon name="sun" />
                )}
            />
           </div>
           <div className="middle">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </nav>
           </div>
           <div className="right">
            <button>Download CV</button>
            <button>Hire Me</button>
           </div>
        </div>
    )
}

export default NavBar;