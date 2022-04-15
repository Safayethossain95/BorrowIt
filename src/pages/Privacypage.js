import React from 'react'
import Menubar from '../components/Menubar'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import Privacypolicy from '../components/Privacypolicy'

const Privacypage = () => {
  return (
    <>
       <Menubar name1="Sign Up" name2="Login"/> 
       <Privacypolicy/>
       <Footer/>
       <Copyright/>
    </>
  )
}

export default Privacypage