import React, { Component } from 'react';
import firebaseauth from "../../firebase";
import { Link, withRouter } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import "./Navbar.css";

class Navbar extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
            navigateLogIn: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
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

    closeMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {

            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    render() {
        if (this.state.navigateLogIn) {

        }

        return (
            <div className="container">
                <Nav sticky="top" className="cd-header" id="nav-nav">
                    <Nav sticky="top" className="header-wrapper">
                        <div className="logo-wrap">
                            <a href="/" className="hover-target"><span>Hello </span>World</a>
                        </div>
                        <div className="nav-but-wrap">
                            <Nav className="justify-content-center" activeKey="/home">
                                <Nav.Item>
                                    <Nav.Link className="nav-item"><Link to="/home">Home</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="nav-item" onClick={this.handleLogOut.bind(this)}><Link to="/"><span>Log Out</span></Link></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Nav>
                </Nav>
            </div>);
    }
}

export default Navbar;