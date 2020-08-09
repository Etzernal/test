import React, { Component } from 'react'
import { Col, Card } from 'react-bootstrap'
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LiveChatHeader } from './components/LiveChatHeader'
import { Helmet } from 'react-helmet';

class LiveChat extends Component {

    render() {
        return (
            <React.Fragment>
            <Helmet><title>Live Chat</title></Helmet>
                <LiveChatHeader />
                <div className="text-center" style={{ backgroundColor: "#E8E8E8", padding: "2rem", marginLeft: '15%', marginRight: '15%'}}>
                    <h5 className="text-center mb-3">What is your question about?</h5>
                    <Col>
                        <Link to="/contact/livechat/filterone" style={{ color: 'black' }}>
                            <div className="text-center"><Card>
                                <Card body>Book And Join A Tour</Card>
                            </Card>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/contact/livechat/filtertwo" style={{ color: 'black' }}>
                            <div className="text-center"><Card>
                                <Card body>Before And After Your Tour</Card>
                            </Card>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/contact/livechat/filterthree" style={{ color: 'black' }}>
                            <div className="text-center"><Card>
                                <Card body>Activities On Tour</Card>
                            </Card>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/contact/livechat/filterfour" style={{ color: 'black' }}>
                            <div className="text-center"><Card>
                                <Card body>Packages and Promotions</Card>
                            </Card>
                            </div>
                        </Link>
                    </Col>
                    <div className="mt-3">
                        <Col>
                            <Link to="/contact" style={{ color: 'black' }}>
                                <p className="text-center">Cancel</p>
                            </Link>
                        </Col>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LiveChat;



