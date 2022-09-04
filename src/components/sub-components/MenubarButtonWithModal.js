import React,{useState,useEffect} from 'react'
import { Button,Form,Modal, Row, Col,Tab,Nav} from 'react-bootstrap'
import {FaMapMarkerAlt,FaChevronRight,FaSignInAlt} from 'react-icons/fa'
import { useNavigate } from "react-router-dom"
const MenubarButtonWithModal = (props) => {
    
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setShow3(false);
  const handleClose4 = () => setShow4(false);
  const handleClose5 = () => setShow5(false);

  const handleShow3 = () =>  { 
      setShow3(true);
      setShow2(false)
    }
    const handleShow4 = () =>  { 
        setShow4(true);
        setShow3(false)
      }
    const handleShow5 = () =>  { 
        setShow5(true);
        setShow4(false)
      }
      const handlenavigate= ()=>{
        navigate('/dashboard')
      }

  return (
    <>
        <div className="something">
            <Button onClick={props.not=="not"?handlenavigate:handleShow}  className={props.classname}  style={{width:`${props.wide}`,borderRadius:`${props.borderradius}`,margin:`${props.marg}`}}><FaMapMarkerAlt style={{marginRight:"3px", fontSize:"18px"}}/> {props.title}</Button>
            <Button className={props.classname2}  style={{width:`${props.wide}`,borderRadius:`${props.borderradius}`,margin:`${props.marg}`}} onClick={handleShow2}><FaSignInAlt style={{marginRight:"3px", fontSize:"18px"}}/> {props.title2}</Button>
        </div>

        <Modal className="login_modal" show={props.not=="not"?"":show} onHide={handleClose}>
                <Modal.Header closeButton>
                        <div className="modal-header" lg={12}>
                            <h3>Welcome to <span>Borrow it</span> </h3>
                            <p>Log in to manage your account.</p>
                        </div>                        
                        <hr/>
                </Modal.Header>
                <Modal.Body>
                        <Row>
                            <Col lg={5}>
                                <ul>
                                        <li>
                                            <img src="assets/images/add-login.png" alt=""/>
                                            Start posting your own ads.
                                        </li>
                                        <li>
                                            <img src="assets/images/view .png" alt=""/>
                                            Mark ads as favorite and view them later.
                                        </li>
                                        <li>
                                            <img src="assets/images/manage.png" alt=""/>
                                            View and manage your ads at your convenience.
                                        </li>
                                    </ul>
                                </Col>
                                <Col lg={7}>
                                <div className="reg_input">
                                <form action="#" className="rony">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control"  placeholder="Name"/>
                                        <label >Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control"
                                            placeholder="name@example.com"/>
                                        <label >Email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control"
                                            placeholder="Password"/>
                                        <label >Password</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="password" className="form-control" 
                                            placeholder="Password"/>
                                        <label >Confirm password</label>
                                    </div>
                                    <button type="submit"> Sign up </button>
                                </form>
                                    </div>
                                </Col>
                            </Row>
                </Modal.Body>
                
            </Modal>

            {/* //////////////// modal 2 */}
            <Modal className="login_modal" show={props.not=="not"?"":show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                
                        <div className="modal-header" lg={12}>
                            <h3>Welcome to <span>Borrow it</span> </h3>
                            <p>Log in to manage your account.</p>
                        </div>
                        
                    <hr/>
                </Modal.Header>
                <Modal.Body>
                    
                    <Row>
                        <Col lg={5}>
                            <ul>
                                    <li>
                                        <img src="assets/images/add-login.png" alt=""/>
                                        Start posting your own ads.
                                    </li>
                                    <li>
                                        <img src="assets/images/view .png" alt=""/>
                                        Mark ads as favorite and view them later.
                                    </li>
                                    <li>
                                        <img src="assets/images/manage.png" alt=""/>
                                        View and manage your ads at your convenience.
                                    </li>
                                </ul>
                        </Col>
                        <Col lg={7}>
                        <div className="reg_input">
                                <form action="#" className="rony">
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput"
                                            placeholder="name@example.com"/>
                                        <label for="floatingInput">Email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="floatingPassword"
                                            placeholder="Password"/>
                                        <label for="floatingPassword">Password</label>
                                    </div>
                                    <button type="submit"> login </button>

                                    <button onClick={handleShow3} type="submit" data-bs-toggle="modal" data-bs-target="#staticForgot">Forgot
                                        password?</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                  
                </Modal.Body>
                
            </Modal>


            {/* =================== modal 3 for forgot password */}

            <Modal className="login_modal" show={props.not=="not"?"":show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                
                        <div className="modal-header" lg={12}>
                            <h3>Welcome to <span>Borrow it</span> </h3>
                            <p>Log in to manage your account.</p>
                        </div>
                        
                    <hr/>
                </Modal.Header>
                <Modal.Body>
                    
                    <Row>
                        <Col lg={5}>
                            <ul>
                                    <li>
                                        <img src="assets/images/add-login.png" alt=""/>
                                        Start posting your own ads.
                                    </li>
                                    <li>
                                        <img src="assets/images/view .png" alt=""/>
                                        Mark ads as favorite and view them later.
                                    </li>
                                    <li>
                                        <img src="assets/images/manage.png" alt=""/>
                                        View and manage your ads at your convenience.
                                    </li>
                                </ul>
                        </Col>
                        <Col lg={7}>
                        <div className="reg_input">
                                <form action="#" className="rony">
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput"
                                            placeholder="name@example.com"/>
                                        <label for="floatingInput">Email</label>
                                    </div>
                                   
                                    <button onClick={handleShow4} type="submit"> Submit </button>

                                </form>
                            </div>
                        </Col>
                    </Row>
                  
                </Modal.Body>
                
            </Modal>

            {/* ============ modal 4 send code */}

            <Modal className="login_modal" show={props.not=="not"?"":show4} onHide={handleClose4}>
                <Modal.Header closeButton>
                
                        <div className="modal-header" lg={12}>
                            <h3>Welcome to <span>Borrow it</span> </h3>
                            <p>Log in to manage your account.</p>
                        </div>
                        
                    <hr/>
                </Modal.Header>
                <Modal.Body>
                    
                    <Row>
                        <Col lg={5}>
                            <ul>
                                    <li>
                                        <img src="assets/images/add-login.png" alt=""/>
                                        Start posting your own ads.
                                    </li>
                                    <li>
                                        <img src="assets/images/view .png" alt=""/>
                                        Mark ads as favorite and view them later.
                                    </li>
                                    <li>
                                        <img src="assets/images/manage.png" alt=""/>
                                        View and manage your ads at your convenience.
                                    </li>
                                </ul>
                        </Col>
                        <Col lg={7}>
                        <div className="reg_input">
                                <form action="#" className="rony">
                                    <div className="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput"
                                            placeholder="name@example.com"/>
                                        <label for="floatingInput">Enter Your Code</label>
                                    </div>
                                   
                                    <button onClick={handleShow5} type="submit"> Submit </button>

                                </form>
                            </div>
                        </Col>
                    </Row>
                  
                </Modal.Body>
                
            </Modal>


            {/* ================ modal 5 */}

            <Modal className="login_modal" show={props.not=="not"?"":show5} onHide={handleClose5}>
                <Modal.Header closeButton>
                
                        <div className="modal-header" lg={12}>
                            <h3>Welcome to <span>Borrow it</span> </h3>
                            <p>Log in to manage your account.</p>
                        </div>
                        
                    <hr/>
                </Modal.Header>
                <Modal.Body>
                    
                    <Row>
                        <Col lg={5}>
                            <ul>
                                    <li>
                                        <img src="assets/images/add-login.png" alt=""/>
                                        Start posting your own ads.
                                    </li>
                                    <li>
                                        <img src="assets/images/view .png" alt=""/>
                                        Mark ads as favorite and view them later.
                                    </li>
                                    <li>
                                        <img src="assets/images/manage.png" alt=""/>
                                        View and manage your ads at your convenience.
                                    </li>
                                </ul>
                        </Col>
                        <Col lg={7}>
                        <div className="reg_input">
                                <form action="#" className="rony">
                                    <div className="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput"
                                            placeholder="name@example.com"/>
                                        <label for="floatingInput">Enter Your New Password</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput"
                                            placeholder="name@example.com"/>
                                        <label for="floatingInput">Confirm New Password</label>
                                    </div>
                                   
                                    <button type="submit"> Submit </button>

                                </form>
                            </div>
                        </Col>
                    </Row>
                  
                </Modal.Body>
                
            </Modal>



        
    </>
  )
}

export default MenubarButtonWithModal