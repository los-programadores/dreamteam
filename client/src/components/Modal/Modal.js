import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./Modal.css";

class ModalComponent extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
        };

        this.handleShow = () => {
            this.setState({ show: true });
        };

        this.handleHide = () => {
            this.setState({ show: false });
        };
    }

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Learn More
                </Button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    dialogClassName="modal-90w"
                    aria-labelledby="custom-modal"
                    size="lg"

                >
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col className="content-section-heading">
                                <h2>How It Works</h2>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col className="modal-left">
                                <span className="modal-icon">
                                    <i className="material-icons orange600">card_travel</i>
                                </span>
                                <h4 className="modal-title">
                                    <strong>Create</strong>
                                </h4>
                                <p className="modal-text">Get inspired for your next adventure as you build a dynamic voyage on our platform.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="modal-center">
                                <span className="modal-icon">
                                    <i className="material-icons orange600">perm_contact_calendar</i>
                                </span>
                                <h4 className="modal-title">
                                    <strong>Connect</strong>
                                </h4>
                                <p className="modal-text">Engage with accomplished translators that are handpicked and ready to help you plan your trip.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="modal-right">
                                <span className="modal-icon">
                                    <i className="material-icons orange600">airplanemode_active</i>
                                </span>
                                <h4 className="modal-title">
                                    <strong>Explore</strong>
                                </h4>
                                <p className="modal-text">When you feel ready, Bon Voyage!</p>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>

            </>
        );
    }
}

export default ModalComponent;