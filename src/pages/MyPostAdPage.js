import React from 'react'
import Menubar from "../components/Menubar";
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import Mypostad from '../components/Mypostad';

const MyPostAdPage = () => {
  return (
    <>
        <Menubar title="My Account" title2="Log Out" not="not"/>
        <Mypostad/>
        <Footer/>
        <Copyright/>
    </>
  )
}

export default MyPostAdPage