import React from 'react'
import Menubar from './../components/Menubar';
import Footer from './../components/Footer';
import Copyright from './../components/Copyright';
import Dashboard from '../components/Dashboard';
const Mydashboard = () => {
  return (
    <>
        <Menubar title="My Account" title2="Log Out" not="not"/>
        <Dashboard/>
        
        <Footer/>
        <Copyright/>
    </>
  )
}

export default Mydashboard