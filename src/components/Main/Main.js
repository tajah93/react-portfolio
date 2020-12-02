import React, { Component } from 'react';
import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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