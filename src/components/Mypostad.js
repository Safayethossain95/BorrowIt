import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import BasicInputbox from './sub-components/BasicInputbox';
import LocationTrackButton from './sub-components/LocationTrackButton';
const Mypostad = () => {
  return (
    <>
        <div className="add_post">
            <Container>
                <Row>
                    <Col lg={8} style={{margin:"0 auto"}}>
                    <div className="product_condition one">
                            <h3>condition</h3>
                            <div className="condition">
                                <div className="left">
                                    <input type="radio" id="lala" name="ami"/>
                                    <label for="lala">Used</label>
                                </div>
    
                                <div className="right">
                                    <input type="radio" name="ami" id="new"/>
                                    <label for="new">New</label>
                                </div>
                            </div>
                        </div>
                    <div className="product_condition one">
                            <h3>Authenticity</h3>
                            <div className="condition">
                                <div className="left">
                                    <input type="radio" id="lala" name="ami"/>
                                    <label for="lala">Original</label>
                                </div>
    
                                <div className="right">
                                    <input type="radio" name="ami" id="new"/>
                                    <label for="new">Refurbished</label>
                                </div>
                            </div>
                        </div>

                        <div className="brand">
                            <BasicInputbox title="Title" placeholder="Title" />
                            <BasicInputbox title="Brand" placeholder="Brand" />
                            <BasicInputbox title="Model" placeholder="Model" />
                            <div className="details">
                                    <label>Description</label>
                                    <textarea name="" id="" placeholder="More details = more interested buyers!"></textarea>
                            </div>
                            <BasicInputbox title="Price(Tk)" placeholder="Price"/>
                            <BasicInputbox title="Damage Waiver (Tk)" placeholder="Damage Waiver Cost"/>
                            <label>Location</label>
                            <LocationTrackButton wide="100%" borderradius="10px" marg="15px 0"></LocationTrackButton>
                            <div class="category">
                                <label>Category</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Select a Category</option>
                                    <option value="1">Music</option>
                                    <option value="2">Cloth</option>
                                    <option value="3">Electronics products</option>
                                </select>
                            </div>

                            
                            <div className="add_img">
                                <h3>Add up to 5 photos</h3>
        
                                <label> Upload  Images
                                    <input type="file" size="60"/>
                                </label>
                            </div>
                        </div>

                        <div className="contact_details">
                            <h3>Contact details</h3>
                            <p className="name">
                                Name: <span>account holder name</span>
                            </p>
                            <p className="email">
                                Email: <span>account create Email</span>
                            </p>
    
                               <div className="main">
                                <div className="mb-3 left">
                                    <label for="exampleInputPassword1" className="form-label" >Phone-1</label>
                                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Phone Number"/>
                                </div>
                                <div className="mb-3 right">
                                    <label for="exampleInputPassword1" className="form-label" >Phone-2</label>
                                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Phone Number"/>
                                </div>
                               </div>
    
                        </div>
    
                        <button className="post_ad_btn"> Post Ad</button>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Mypostad