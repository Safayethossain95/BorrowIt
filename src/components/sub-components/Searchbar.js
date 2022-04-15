import React from 'react'
import { Container } from 'react-bootstrap'
import {Form,Button} from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa';
const Searchbar = (props) => {

    
  return (
    <>
        <Container>
            <div className="serach_bar">
                <Form onSubmit={props.handlesubmit}>
                    <Form.Group className="mb-3"> 
                    <div className="searchposition">
                        <Form.Control onChange={props.handlesearch} type="text" placeholder="What are you looking for?"/>                                
                        <Button type="submit"><FaSearch style={{marginBottom:"20px"}}/></Button>
                    </div>                          
                        
        
                    </Form.Group>
                    
                    </Form>
            </div>
        </Container>
    </>
  )
}

export default Searchbar