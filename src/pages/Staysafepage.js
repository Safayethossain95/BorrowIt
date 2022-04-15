import React from 'react'
import Menubar from "../components/Menubar";
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import Staysafe from '../components/Staysafe';
const Staysafepage = () => {
  return (
    <>
        <Menubar name1="Sign Up" name2="Login"/>
          <Staysafe/>
          <Footer/>
          <Copyright/>
    </>
  )
}

export default Staysafepage