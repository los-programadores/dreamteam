import React, { Component } from 'react';
import firebaseauth from "../firebase";
import { Link, withRouter } from "react-router-dom";
import "./Navbar/Navbar.css";

class Navbar extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
            navigateLogIn: false
        };

        this.showMenu = this.showMenu.bind(this);
    }

    handleLogOut = () => {
        firebaseauth.auth().signOut().then(() => { }).catch(function (error) {
            throw error
        });
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true });
    }



    render() {
        if (this.state.navigateLogIn) {
        }

        return (<div className="container">
            <header className="cd-header">
                <div className="header-wrapper">
                    <div className="logo-wrap">
                        <a href="/" className="hover-target"><span>Hello World</span></a>
                    </div>
                    <div className="nav-but-wrap">
                        <div className="menu-icon hover-target" onClick={this.showMenu}>
                            <span className="menu-icon__line menu-icon__line-left"></span>
                            <span className="menu-icon__line"></span>
                            <span className="menu-icon__line menu-icon__line-right"></span>
                        </div>
                    </div>



                    {
                        this.state.showMenu
                            ? (
                                <div
                                    className="nav"
                                    ref={(element) => {
                                        this.dropdownMenu = element;
                                    }}
                                >
                                    <button className="nav-item"><Link to="/home">Home</Link></button>
                                    <button className="nav-item"><Link to="/voyages">Voyages</Link></button>
                                    <button className="nav-item"><Link to="/gchat">Chat</Link></button>
                                    <button className="nav-item" onClick={this.handleLogOut.bind(this)}><Link to="/">Log Out</Link></button>
                                </div>
                            )
                            : (
                                null
                            )
                    }
                </div>
            </header>
        </div>);
    }
}

export default Navbar;