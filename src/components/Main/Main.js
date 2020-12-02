import React, { Component } from 'react';
import "./Main.css";
import Header from "./Header.js";
import Footer from "./Footer.js";

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <body>
                    {this.props.children}
                </body>
                <Footer />
            </div>
        )
    }
}

export default Main;