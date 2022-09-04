import React from 'react'
import Menubar from "../components/Menubar";
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import Staysafe from '../components/Staysafe';
const Staysafepage = () => {
  return (
    <>
        <Menubar title="Sign Up" title2="Login" not=""/>
          <Staysafe/>
          <Footer/>
          <Copyright/>
    </>
  )
}

export default Staysafepage