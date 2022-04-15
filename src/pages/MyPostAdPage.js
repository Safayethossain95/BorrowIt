import React from 'react'
import Menubar from "../components/Menubar";
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import Mypostad from '../components/Mypostad';

const MyPostAdPage = () => {
  return (
    <>
        <Menubar name1="My Account" name2="Log Out"/>
        <Mypostad/>
        <Footer/>
        <Copyright/>
    </>
  )
}

export default MyPostAdPage