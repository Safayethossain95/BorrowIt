import React from 'react'
import Menubar from '../components/Menubar'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import Privacypolicy from '../components/Privacypolicy'

const Privacypage = () => {
  return (
    <>
       <Menubar title="Sign Up" title2="Login" not=""/> 
       <Privacypolicy/>
       <Footer/>
       <Copyright/>
    </>
  )
}

export default Privacypage