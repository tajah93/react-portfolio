import React, { Component } from 'react';
import "./Header.css";
import {Link} from "react-router";

Nav = Link

class Header extends Component {
    render() {
        return (
            <Header className="navbar navbar-expand-lg navbar-light bg-light">
                <Nav>Tajah Johnson</Nav>
                <Nav to= "/">About Me</Nav>
                <Nav to= "/contact">Contact</Nav>
                <Nav to= "/portfolio">Portfolio</Nav>
            </Header>
        )
    }
}

export default Header; 