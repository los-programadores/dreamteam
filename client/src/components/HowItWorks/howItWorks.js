import React from "react";


function HowItWorks(){
    return (
        <div className="howItWorks">
            <div className="row">
                <div className="col-md-12">
                    <section className="content-section text-center" id="services">
                        <div className="container">
                            <div className="content-section-heading">
                                <h1 className="mb-5"> <b>How It Works</b></h1>
                                <hr></hr>
                            </div>
                            <div className="row">
                                <div id="firstSection" className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                                    <span className="service-icon rounded-circle mx-auto mb-3">
                                    <i className="fas fa-desktop"></i>
                                </span>
                                <h4>
                                    <strong>Search for your candidate</strong>
                                    <hr></hr>
                                </h4>
                                <br></br>
                                <p className="text-faded mb-0">
                                    We offer a variety of translator speaking all kinds of different languages.
                                </p>
                            </div>
                            <div id="secondSection" className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                                <span className="service-icon rounded-circle mx-auto mb-3">
                                    <i className="fas fa-database"></i>
                                </span>
                                <h4>
                                    <strong>Hire your translator</strong>
                                    <hr></hr>
                                </h4>
                                <br></br>
                                <p className="text-faded mb-0">
                                    Once you find a fitting candidate, go ahead and hire them.
                                    We will provide you with various information regarding your translator, like rately fee, area they currently live in and as well some information to get to know them a litle better.
                                </p>
                            </div>
                            <div id="thirdSection" className="col-lg-4 col-md-6 mb-5 mb-md-0">
                                <span className="service-icon rounded-circle mx-auto mb-3">
                                    <i className="fas fa-layer-group"></i>
                                </span>
                                <h4>
                                    <strong>Enjoy your trip</strong>
                                    <hr></hr>
                                </h4>
                                <br></br>
                                <p className="text-faded mb-0">
                                    Once the hiring process is complete, sit back relax and enjoy your trip. No longer do you need to worry about certain threshold having to hold you back.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    )
}

export default HowItWorks;