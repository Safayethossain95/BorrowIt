import React from 'react'
import { Container, Row,Col,Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaPhoneAlt} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <Container>
                <Row>
                    <Col lg={3}>
                        <h3 className='logo'>Borrow It</h3>
                        <p>Lorem ipsum dolor quis adipisci, similique quod atque dolore voluptate! Atque odio, ipsam
                            debitis earum, fuga qui repudiandae sequi asperiores nostrum velit nam.</p>
                    </Col>
                    <Col lg={3}>
                        <h4>Follow Borrow it</h4>
                        <ul className='links'>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><a href="#" target="_blank">Facebook</a></li>
                            <li><a href="#" target="_blank">Twitter</a></li>
                            <li><a href="#" target="_blank">Youtube</a></li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <h4>About</h4>
                        <ul className='links'>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/privacy">Privacy & Policy</Link></li>
                            <li><Link to="/terms">Terms & Conditions</Link></li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                    <h4>Contact</h4>
                    <div className="phone">
                        <a href="tel:01717246139"> <FaPhoneAlt style={{marginRight:"3px"}}/> 01717246139</a>
                        <a href="tel:01910175050"> <FaPhoneAlt style={{marginRight:"3px"}}/> 01910175050</a>
                        <a href="mailto:ronytalukder0014@gmailcom"> <i class="fa-solid fa-envelope-circle-check"></i>
                            ronytalukder0014@gmailcom</a>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Footer