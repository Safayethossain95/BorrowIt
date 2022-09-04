import React,{useState,useEffect} from 'react'
import {Form,Button, Container} from 'react-bootstrap'
import {FaSearch,FaMapMarkerAlt} from 'react-icons/fa'
import Searchbar from './sub-components/Searchbar';
const Fashion = () => {
    
    const [selected,setSelected] = useState("All of Bangladesh")
    const [searchitem,setSearchItem] = useState("")
    const [searchfinal,setSearchfinal] = useState([])
    const fashionarr = [{title:"Diesel Watch",location:"Dhaka, Uttara",price:"150"},{title:"Apple Watch",location:"Dhaka, Uttara",price:"150"},{title:"Huawei Watch",location:"Dhaka, Uttara",price:"150"}]
    
    const handleSearch=(e)=>{
        setSearchItem(e.target.value)  
    }



const handleSubmit =(e)=>{
    e.preventDefault()
    let regex = new RegExp(searchitem,'gi')
        
        let searchresult = fashionarr.reduce((initvalue,message)=>{
            if(message.title && message.title.match(regex)){
                 initvalue.push(message)
            }
            return initvalue
       },[])
       setSearchfinal(searchresult)
   
}

    useEffect(()=>{
        setSearchfinal("")
    },[])
  return (
    <>
        <Container>
        <div className="search_bar2">
            <Searchbar handlesubmit={handleSubmit} handlesearch={handleSearch}/>
            
            
            
            {/* <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3"> 
            <div className="searchposition">
                <Form.Control onChange={handleSearch} type="text" placeholder="What are you looking for?"/>                                
                <Button type="submit"><FaSearch style={{marginBottom:"20px"}}/></Button>
            </div>                          
                

            </Form.Group>
            
            </Form> */}
        </div>
        <div className="fashion_items">
                        {
                            searchfinal? searchfinal.map(item=>(
                                <a href="product_details.html" className="post_item_link" style={{width:"48%", margin:"0 10px"}}>
                                <div className="post_part">
                                <div className="post_item">
                                    <div className="img">
                                        <img src="assets/images/watch.jpg" alt=""/>
                                    </div>
                                    <div className="text">
                                        <h3>{item.title}</h3>
                                        <p> <FaMapMarkerAlt/> {item.location}</p>
                                        <h4 className="price">{item.price}<span>Tk/day</span></h4>
                                    </div>
                                    
                                </div>
                                </div>
                            </a>
                            ))
                            :
                            fashionarr?fashionarr.map(item=>(
                                <a href="product_details.html" className="post_item_link" style={{width:"48%", margin:"0 10px"}}>
                                <div className="post_part">
                                <div className="post_item">
                                    <div className="img">
                                        <img src="assets/images/watch.jpg" alt=""/>
                                    </div>
                                    <div className="text">
                                        <h3>{item.title}</h3>
                                        <p> <FaMapMarkerAlt/> {item.location}</p>
                                        <h4 className="price">{item.price}<span>Tk/day</span></h4>
                                    </div>
                                    
                                </div>
                                </div>
                            </a>
                            ))
                            :
                            ""                            
                        }
                       
                        {/* <a href="product_details.html" className="post_item_link" style={{width:"48%", margin:"0 10px"}}>
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
                        </a> */}
                      
        </div>
        </Container>
    </>
  )
}

export default Fashion