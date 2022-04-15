import React from 'react'
import Menubar from './../components/Menubar';
import Footer from './../components/Footer';
import Copyright from './../components/Copyright';
import Terms from '../components/Terms';
const Termspage = () => {
  return (
    <>
        <Menubar name1="Login" name2="Sign up"/>
        
        <Terms/>
        <Footer/>
        <Copyright/>
    </>
  )
}

export default Termspage