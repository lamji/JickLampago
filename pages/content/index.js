import React from 'react'
import {Container, Row, Col, Image, Card, Span} from 'react-bootstrap'
import Contact from '../developercontact/index'
import Particles from 'react-particles-js';
import Skill from '../skills/index'
import Project from '../project/index'



export default function index(){

    return(
        <React.Fragment>
            <Container>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 10
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} />
                <Row className="overlay-particles m-0">
                <Col md={8} xs={12} className="mx-auto text-center p-0">
                <Image src="./me.png" className="logo-image" /> <br /> 
                <a className="mb-5" href="https://www.docdroid.net/07QRbc3/resume-pdf" target="_blank" className="text-white btn bg-dark">Check my resume here.</a> <br /><br />
                <h4>
                <Image src="./screedbot.gif" className="myName" />
                </h4>
                <p>Full Stack Web Developer</p>
                <Image src="./scroll.gif" className="scroll-image" />
                </Col>
                </Row>
            </Container>
            <Skill />
            <Project />
            <Card className="socialAccount">
                <Contact />
                <hr />
                    <h5 className=" text-center">Developer Contact</h5> <br />
                    <p className=" text-center mb-0 text-light"><i>Phone: +639206502183</i></p>
                    <p className=" text-center mb-0 text-light"><i>Skype: lamapgojick5@outlook.com</i></p>
                    <p className=" text-center mb-0 text-light"><i>Gmail: lamapgojick5@gmail.com</i></p>   
                </Card>
        </React.Fragment>
    )
}