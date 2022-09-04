import React,{useState,useEffect,useRef} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
import {FaMapMarkerAlt,FaChevronLeft,FaChevronRight,FaPhoneAlt,FaLock} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const ProductDetails = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <FaChevronRight/>,
        prevArrow: <FaChevronLeft/>
        
        
      };
      const [nav1, setNav1] = useState();
      const [nav2, setNav2] = useState();
      const slider1 = useRef(null);
      const slider2 = useRef(null);
      const [clicked,setClicked] = useState("")
      const handleOnClick=(e)=>{
        setClicked("slick-active")
      }

      useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
      }, []);
    
  return (
    <>
       <div className="productwrapper">
       <Container>
           <div className="product_details">
            <div className="product_details_title">
                    <h3>Diesel hand watch</h3>
                    <p><FaMapMarkerAlt/> Dhaka, Uttara</p>
                </div>

                <Row>
                    <Col lg={8}>
                    <div className="img_details">

                    <div className="big_img_slider">
                    <Slider {...settings} asNavFor={nav2} ref={slider1}>
                    <div className="item">
                                <img src="assets/images/watch.jpg" alt=""/>
                            </div>
                            <div className="item">
                                <img src="assets/images/watch2.jpg" alt=""/>
                            </div>
                            <div className="item">
                                <img src="assets/images/watch3.jpg" alt=""/>
                            </div>
                            <div className="item">
                                <img src="assets/images/watch4.jpg" alt=""/>
                            </div>
                            <div className="item">
                                <img src="assets/images/watch5.jpg" alt=""/>
                            </div>
                        </Slider>

                        
                    </div>

                    <div className="small_img_slider">
                    <Slider {...settings2}  asNavFor={nav1}
                        ref={slider2}>
                            <div className="item" onClick={e => handleOnClick(e)}>
                                <img src="assets/images/watch.jpg" alt=""/>
                                <div className="overlay"></div>
                            </div>
                            <div className="item" onClick={e => handleOnClick(e)}>
                                <img src="assets/images/watch2.jpg" alt="" />
                                <div className="overlay"></div>
                            </div>
                            <div className="item">
                                <img src="assets/images/watch3.jpg" alt=""/>
                                <div className="overlay"></div>
                            </div>
                            <div className="item">
                                <img src="assets/images/watch4.jpg" alt=""/>
                                <div className="overlay"></div>
                            </div>
                            <div className="item">
                                <img src="assets/images/watch5.jpg" alt=""/>
                                <div className="overlay"></div>
                            </div>
                        </Slider>
                    </div>

                    </div>
                    <div class="item_details_condition">
                        <div class="model_condition">
                            <p>Condition: <span>Used</span> </p>
                            <p>Model: <span>lalala</span></p>
                            <p>Authenticity: <span>Original</span> </p>
                        </div>

                        <div className="description">
                            <h3>description</h3>

                            <p>আামাদের ঠিকানাঃ-

                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae magnam mollitia sed
                                deserunt earum nesciunt et quidem consequatur eaque eligendi maxime ipsa adipisci nam
                                rerum, repudiandae accusamus modi delectus incidunt! Quos libero, veritatis tenetur
                                saepe placeat molestias iste error, eos atque ipsam minus est dolores velit, fugit iure
                                natus odit obcaecati ut consectetur aliquid voluptas doloremque cumque corrupti. Ipsa,
                                neque distinctio natus velit amet molestiae numquam harum laudantium modi aut fuga
                                voluptate ex iste totam facilis dolore optio a consequatur quisquam accusamus. Sed
                                eligendi neque possimus blanditiis quibusdam natus itaque expedita autem doloribus odit
                                inventore laborum accusantium, tenetur vel fuga nostrum esse recusandae soluta!
                                Aspernatur, animi ducimus ab voluptates minus et corrupti facere magni obcaecati cumque
                                soluta neque sequi suscipit inventore nobis, molestias necessitatibus, voluptatum
                                temporibus voluptatibus? Ea ipsa dolorem quibusdam? Eligendi quia deserunt nostrum velit
                                rem id adipisci atque saepe assumenda cumque? Molestias placeat impedit adipisci, vel
                                non maiores iure facere, id mollitia perspiciatis ipsa eum repellendus aspernatur
                                blanditiis. Praesentium rem tempore cumque dolorum consequatur magnam quod laboriosam
                                quisquam totam ullam quo perferendis amet alias necessitatibus, ut molestiae quos hic
                                ducimus! Voluptate excepturi debitis, neque similique in quod magni natus animi
                                recusandae tenetur accusamus, molestias vero! Veritatis, animi aliquid?

                            </p>
                        </div>
                    </div>
                    </Col>
                    <Col lg={4}>
                    <div class="information">

                        <div className="pricing">
                            <h3> Product Rent </h3>
                            <ul>
                                <li>
                                    <div className="img">
                                        <img src="assets/images/taka.png" alt=""/>
                                    </div>
                                    <p>Cost
                                        <span> 150 Tk/day</span>
                                    </p>

                                </li>

                                <li>
                                    <div className="img">
                                        <img src="assets/images/taka.png" alt=""/>
                                    </div>
                                    <p>Damage Waiver
                                        <span> 1500 Tk</span>
                                    </p>

                                </li>

                                <li>
                                    <div className="img">
                                        <img src="assets/images/project-status.png" alt=""/>
                                    </div>
                                    <p>Status
                                        <span>Available</span>
                                    </p>

                                </li>
                            </ul>

                            <ul className="call_seller">
                                <p><FaPhoneAlt style={{fontSize:"18px",color:"#1d63ff"}}/> Call Seller</p>
                                <li className="numbers"><a href="tel:01717246139">01717246139</a></li>
                                <li className="numbers"><a href="tel:01910175050">01910175050</a></li>
                            </ul>

                        </div>


                        <div class="Safety_tips">
                            <p> <FaLock style={{marginRight:"5px",color:"#F2C32B",fontSize:"20px"}}/> Safety tips </p>

                            <ul style={{paddingLeft:"0"}}>
                                <li> Avoid offers that look unrealistic </li>
                                <li> Chat with seller to clarify item details </li>
                                <li> Meet in a safe & public place </li>
                                <li> Check the item before buying it </li>
                                <li> Don’t pay in advance </li>
                                <Link to="/staysafe" target="_blank"> See all safety tips</Link>
                            </ul>
                        </div>

                        </div>
                    </Col>
                </Row>
           </div>
       </Container>
       </div>
    </>
  )
}

export default ProductDetails