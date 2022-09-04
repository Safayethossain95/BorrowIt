import React from 'react'
import Menubar from "../components/Menubar";
import Banner from '../components/Banner';
import Category from '../components/Category';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
const Homepage = () => {
  return (
    <>
          <Menubar title="Sign Up" title2="Login" not=""/>
          <Banner/>
          <Category/>
          <Footer/>
          <Copyright/>
    </>
  )
}

export default Homepage