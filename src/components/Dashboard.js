import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {FaMapMarkerAlt} from 'react-icons/fa'

const Dashboard = () => {
  return (
    <>
        <Container>
            <div className="dashboard">
                <Row>
                    <Col lg={4}>
                        <div className="post_part">
                            <h2>Account Holder Name</h2>
                            <div className="add_post_btn">
                                <a href="my_post_ad.html">Post your ad now!</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <h3 style={{padding:"5px 0"}}>My Post</h3>
                        <hr/>
                        <a href="product_details.html" className="post_item_link">
                            <div className="post_part">
                            <div className="post_item">
                                <div className="img">
                                    <img src="assets/images/watch.jpg" alt=""/>
                                </div>
                                <div className="text">
                                    <h3>Diesel hand watch</h3>
                                    <p> <FaMapMarkerAlt/> Dhaka, Uttara</p>
                                    <h4 className="price">150 <span>Tk/day</span></h4>
                                </div>
                                <div className="delete_btn">
                                    <button>Delete Ad ??</button>
                                </div>
                            </div>
                            </div>
                        </a>
                        <a href="product_details.html" className="post_item_link">
                            <div className="post_part">
                            <div className="post_item">
                                <div className="img">
                                    <img src="assets/images/watch.jpg" alt=""/>
                                </div>
                                <div className="text">
                                    <h3>Diesel hand watch</h3>
                                    <p> <FaMapMarkerAlt/> Dhaka, Uttara</p>
                                    <h4 className="price">150 <span>Tk/day</span></h4>
                                </div>
                                <div className="delete_btn">
                                    <button>Delete Ad ??</button>
                                </div>
                            </div>
                            </div>
                        </a>
                    </Col>
                </Row>
            </div>
        </Container>
    </>
  )
}

export default Dashboard