import React,{useContext} from 'react'
import { Container } from 'react-bootstrap'
const Category = (props) => {
  
  return (
    <>
        <Container className="category">
        <ul>

            {
                props.searchprop?
                    props.searchprop.map(item=>(
                        <li>
                        <a href="fashion_category.html">
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
                            <a href="fashion_category.html">
                                <img src={item.img} alt=""/>
                                <h3>{item.message}</h3>
                                <p>{item.ads} ads</p>
                            </a>
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