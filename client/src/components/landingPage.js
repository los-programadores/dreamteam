import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css"

class Landing extends Component {

    render() {
        return (
            <div style={{ height: "70vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            Hire anyone in the world, to show you the world.
                        </h4>
                        <p className="flow-text grey-text text-darken-3">
                            Connect with professional translators from all walks of life, united by a shared love of travel.
                        </p>
                        <br />
                        <div className="col s6">
                            <Link
                                to="/signup"
                                style={{
                                    width: "140px",
                                    borderRadius: "50px",
                                    letterSpacing: "1.5px",
                                    padding: "15px"
                                }}
                                className="btn btn-large waves-effect waves-light hoverable accent-3"
                            >Register
                            </Link>
                        </div>

                        <div className="col s6">
                            <Link
                                to="/login"
                                style={{
                                    width: "140px",
                                    borderRadius: "50px",
                                    letterSpacing: "1px",
                                    padding: "15px"

                                }}
                                className="btn btn-large waves-effect waves-light hoverable accent-3 white black-text"
                            > Log In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;