import React from 'react'
import Menubar from "../components/Menubar";
import Banner from '../components/Banner';
import Category from '../components/Category';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
const Myaccountpage = () => {
  return (
    <>
          <Menubar title="My Account" title2="Log Out" not="not"/>
          <Banner/>
          
          <Category/>
          <Footer/>
          <Copyright/>
    </>
  )
}

export default Myaccountpage