import React from 'react'
import Menubar from "../components/Menubar";
import Banner from '../components/Banner';
import Category from '../components/Category';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
const Myaccountpage = () => {
  return (
    <>
          <Menubar name1="My Account" name2="Log Out"/>
          <Banner/>
          
          <Category/>
          <Footer/>
          <Copyright/>
    </>
  )
}

export default Myaccountpage