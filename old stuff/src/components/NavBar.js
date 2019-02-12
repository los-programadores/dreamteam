import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Que?
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/about"
                    className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                >
                    How It Works
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/services"
                    className={window.location.pathname === "/blog" ? "nav-link active" : "nav-link"}
                >
                    Services
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/explore"
                    className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                >
                    Explore
        </Link>
            </li>
            <li className="nav-item text-center">
                <Link
                    to="/chat"
                    className={window.location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
                >
                    Chat
        </Link>
            </li>
        </ul>
    );
}

export default NavTabs;