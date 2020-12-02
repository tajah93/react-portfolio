import React from 'react';
import { BrowserRouter as Link} from "react-router-dom";
import "./Header.css";


function Header() {
   
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <p>Tajah Johnson</p>
                <Link to= "/">About Me</Link>
                <Link to= "/contact">Contact</Link>
                <Link to= "/portfolio">Portfolio</Link>
            </nav>
        )
    
}

export default Header; 