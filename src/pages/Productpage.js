import React from 'react'
import ProductDetails from '../components/ProductDetails'
import Menubar from "../components/Menubar";
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
const Productpage = () => {
  return (
    <>
        <Menubar title="Log In" title2="Sign Up" not=""/>
        <ProductDetails/>
        <Footer/>
        <Copyright/>
    </>
  )
}

export default Productpage