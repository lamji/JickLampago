import React from 'react'
import Link from 'next/link'
import {Container, Nav, Image} from 'react-bootstrap'

export default function index(){
    return(
        <React.Fragment>
        <Container>
        <Nav className="justify-content-center " activeKey="/home">
            <Nav.Link className="" href="https://www.facebook.com/mathew.lampago.3/" target="_blank"><Image src="./fb.png" alt="nameLogo" className="social-icon" />facebook</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/jick-lampago/" target="_blank" className=""><Image src="./linkin.png" alt="nameLogo" className="social-icon" />LinkedIn</Nav.Link>
            </Nav>
        </Container>
        </React.Fragment>
    )
}