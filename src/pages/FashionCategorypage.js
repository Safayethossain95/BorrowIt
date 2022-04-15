import React from 'react'
import Menubar from './../components/Menubar';
import Footer from './../components/Footer';
import Copyright from './../components/Copyright';
import Fashion from '../components/Fashion';

const FashionCategorypage = () => {
  return (
    <>
        <Menubar name1="Login" name2="Sign up"/>
        
        <Fashion/>
        <Footer/>
        <Copyright/>
    </>
  )
}

export default FashionCategorypage