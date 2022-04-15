import React from 'react'
import {Container,Navbar,Nav,NavDropdown,Button} from 'react-bootstrap'
import { FaUserPlus,FaSignInAlt, } from "react-icons/fa";
import {Link} from 'react-router-dom'
const Menubar = (props) => {
  return (
    <>
        
        <Navbar className="main_menu"  expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto onlylinks">
                    <li>
                    <Link to="/privacy" className="nav-link">Privacy</Link>
                    </li>
                    <li>
                    <Nav.Link href="#link">Contact</Nav.Link>

                    </li>
                </Nav>
                <Link className='main_logo' to='/'>Borrow It</Link>
                <Nav.Link href="#link" className="menu_btn"><FaUserPlus style={{marginRight:"3px",fontSize:"20px"}}/> {props.name1}</Nav.Link>
                <Nav.Link href="#link" className="iconactive"><FaSignInAlt style={{marginRight:"3px",fontSize:"20px"}}/> {props.name2}</Nav.Link>                        
                </Navbar.Collapse> 
            </Container>
            </Navbar>
          
       
    </>
  )
}

export default Menubar