import React, { Component } from 'react'
import { Col, Card } from 'react-bootstrap'
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PostForm from './components/PostForm'
import { LiveChatHeader } from './components/LiveChatHeader'

export default class FThreeA extends Component {

    constructor(props) {
        super(props);

        this.state = {
            skill: ["3","1"]
        }
    }

    render() {
        return (
            <React.Fragment>
                <LiveChatHeader />
                <div className="text-center" style={{ backgroundColor: "#E8E8E8", padding: "2rem", marginLeft: '15%', marginRight: '15%' }}>
                    <h5 className="text-center mb-3">What is your question about?</h5>
                    <Col>
                        <Link to="/contact/livechat" style={{ color: 'black', display: 'block' }}>
                            <div className="text-center"><Card>
                                <Card body>Activities On Tour (change option)</Card>
                            </Card>
                            </div>
                        </Link>
                    </Col>
                    <h5 className="text-center mb-3 mt-3"> And more specifically...</h5>
                    <Col>
                        <Link to="/contact/livechat/filterthree" style={{ color: 'black', display: 'block' }}>
                            <div className="text-center"><Card>
                                <Card body>Pre Book Activities (change option)</Card>
                            </Card>
                            </div>
                        </Link>
                    </Col>

                </div>

                <div style={{ backgroundColor: "#E8E8E8", padding: "2rem", marginLeft: '15%', marginRight: '15%' }}>
                    <Col style={{ color: 'black', display: 'block' }} >
                        <h5 className="text-center mb-3">Customer Information</h5>
                        <Card>
                            {/* <PostForm skillOne={"Activities"} skillTwo={"Pre Booked Activities"}/> */}
                            <PostForm skill= {this.state.skill}/>
                        </Card>
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



