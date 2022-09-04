import React,{useState,useEffect} from 'react'
import { Container,Button,Form } from 'react-bootstrap'
import {FaSearch,FaFacebookF,FaTwitter,FaLinkedinIn} from 'react-icons/fa'
import Category from './Category';
import LocationTrackButton from './sub-components/LocationTrackButton';
import Searchbar from './sub-components/Searchbar';
const Banner = () => {
    const [searchitem,setSearchItem] = useState("")
    const [searchfinal,setSearchfinal] = useState([])
    const arr = [{message:"Fashion & Beauty",img:"assets/images/wristwatch.png",ads:"01,858",link:"/fashioncategory"},{message:"Clothing",img:"assets/images/clothing.png",ads:"80,138",link:"/"},{message:"Electronics",img:"assets/images/electronics.png",ads:"66,157",link:"/"},{message:"Furniture",img:"assets/images/home-and-living",ads:"30,188",link:"/"}]

    const handleSubmit =(e)=>{
        e.preventDefault()
        let regex = new RegExp(searchitem,'gi')
            
            let searchresult = arr.reduce((initvalue,message)=>{
                if(message.message && message.message.match(regex)){
                     initvalue.push(message)
                }
                return initvalue
           },[])
           setSearchfinal(searchresult)
       
    }
    
    const handleSearch=(e)=>{
        setSearchItem(e.target.value)  
    }

    useEffect(()=>{
        setSearchfinal("")
    },[])
   

    return (
    <>
            <div className="banner_start">
                <Container>
                    <h1>Borrow It <span>For Your Needs</span></h1>
                    <LocationTrackButton/>
                    <Searchbar handlesubmit={handleSubmit} handlesearch={handleSearch}/>
                    <div className="banner_arrw_shpae">
                        <img src="assets/images/22-dasg.svg" alt="" />
                    </div>
                    <div className="social_icon">
                        <a href="#" target="_blank"> <FaFacebookF style={{marginBottom:"7px"}}/> </a>
                        <a href="#" target="_blank"> <FaTwitter style={{marginBottom:"7px"}}/> </a>
                        <a href="#" target="_blank"> <FaLinkedinIn style={{marginBottom:"7px"}}/> </a>
                    </div>
                </Container>
            </div>

            <Category myarray={arr}  searchprop={searchfinal}/>
    </>
  )
}

export default Banner