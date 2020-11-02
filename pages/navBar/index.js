import React from 'react'
import {Container, Nav} from 'react-bootstrap'

export default function index(){
    return(
        <React.Fragment>
        <Container>
        <Nav className="justify-content-center head" activeKey="/home">
               <h2>My Portfolio</h2>
            </Nav>
        </Container>
        </React.Fragment>
    )
}