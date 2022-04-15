import React,{useState} from 'react'
import { Button,Form,Modal, Row, Col,Tab,Nav} from 'react-bootstrap'
import {FaMapMarkerAlt,FaChevronRight} from 'react-icons/fa'

const LocationTrackButton = (props) => {
  const [show, setShow] = useState(false);
  const [selected,setSelected] = useState("All of Bangladesh")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleSelected = (e)=>{
      setSelected(e.target.innerHTML)
      setShow(false)
  }
   
  return (
    <>
        <div className="location_track_button">
            <Button style={{width:`${props.wide}`,borderRadius:`${props.borderradius}`,margin:`${props.marg}`}} onClick={handleShow}><FaMapMarkerAlt style={{marginRight:"3px", fontSize:"18px"}}/> {selected? selected: "All of Bangladesh"}</Button>
        </div>

        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col className="location_modal" lg={6}>
                            <h3>Select City or Division</h3>
                            <p>{selected? selected: "All of Bangladesh"}</p>
                        </Col>
                        <Col className="location_modal" lg={6}>
                            <h3>Select a local area within Dhaka</h3>
                            <p>Popular Areas</p>
                        </Col>
                    </Row>
                    <hr />
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={6}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                    <Nav.Link eventKey="first">Dhaka <span><FaChevronRight/></span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="second">Chattogram <span><FaChevronRight/></span></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                </Col>
                                <Col sm={6}>
                                <Tab.Content>
                                    <Tab.Pane className="tabpane" eventKey="first">
                                        <ul>
                                            <li onClick={handleSelected}>All of Dhaka</li>
                                            <li onClick={handleSelected}>Dhanmondi</li>
                                            <li onClick={handleSelected}>Mohammadpur</li>
                                            <p>Select other areas (A-Z)</p>
                                            <select>
                                                <option value="">ami 1</option>
                                                <option value="">ami 2</option>
                                                <option value="">ami 3</option>
                                                <option value="">ami 4</option>
                                            </select>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane className="tabpane" eventKey="second">
                                    <ul>
                                            <li onClick={handleSelected}>Kotwali</li>
                                            <li onClick={handleSelected}>Salimpur</li>
                                            
                                            <p>Select other areas (A-Z)</p>
                                            <select>
                                                <option value="">ami 1</option>
                                                <option value="">ami 2</option>
                                                <option value="">ami 3</option>
                                                <option value="">ami 4</option>
                                            </select>
                                        </ul>
                                    </Tab.Pane>
                                </Tab.Content>
                                </Col>
                            </Row>
                            </Tab.Container>
                </Modal.Body>
                
            </Modal>
    </>
  )
}

export default LocationTrackButton