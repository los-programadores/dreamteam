import React from "react";
import chart from "./images/travel-stats"


function Info(){
    return (
        <div className="charts">
            <div className="row">
                <div className="col-md-6 text-center test">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <img src="https://via.placeholder.com/150" alt="placeholder"></img>
                        </div>
                    </div>
                    <br></br>
                    <div className="row text-center">
                        <div className="col-md-12">
                            <img src="https://via.placeholder.com/150" alt="placeholder"></img>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <img src={chart} alt="placeholder"></img>
                </div>
            </div>
        </div>
    )
}

export default Info;