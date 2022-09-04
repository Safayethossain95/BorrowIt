import React from 'react'
import Menubar from './../components/Menubar';
import Footer from './../components/Footer';
import Copyright from './../components/Copyright';
import Fashion from '../components/Fashion';

const FashionCategorypage = () => {
  return (
    <>
        <Menubar title="Login" title2="Sign up" not=""/>
        
        <Fashion/>
        <Footer/>
        <Copyright/>
    </>
  )
}

export default FashionCategorypage