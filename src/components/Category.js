import React,{useContext} from 'react'
import { Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Category = (props) => {
  
  return (
    <>
        <Container className="category">
        <ul>

            {
                props.searchprop?
                    props.searchprop.map(item=>(
                        <li>
                        <a>
                            <img src={item.img} alt=""/>
                            <h3>{item.message}</h3>
                            <p>{item.ads} ads</p>
                        </a>
                    </li>
                    )) 
                :
                props.myarray? 
                        props.myarray.map(item=>(
                            <li>
                            <Link to={item.link}>
                                <img src={item.img} alt=""/>
                                <h3>{item.message}</h3>
                                <p>{item.ads} ads</p>
                            </Link>
                        </li>
                        ))
                        :
                        ""
                }
               
                
                
                              
            
                
               

               
        </ul>
        </Container>
    </>
  )
}

export default Category