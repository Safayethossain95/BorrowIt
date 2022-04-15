import React from 'react'
import ProductDetails from '../components/ProductDetails'
import Menubar from "../components/Menubar";
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
const Productpage = () => {
  return (
    <>
        <Menubar name1="Log In" name2="Sign Up"/>
        <ProductDetails/>
        <Footer/>
        <Copyright/>
    </>
  )
}

export default Productpage