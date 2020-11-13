import { Card, Row, Col, Image,Nav } from 'react-bootstrap'
import Head from 'next/head'
import 'aos/dist/aos.css';
import AOS from 'aos'
import { useEffect } from 'react';

export default function index(){
   
    useEffect(() =>{
        AOS.init({
            duration : 1000
          })
    },[]) 
    
    
    
    return(
        <>
        <Head>
       
      </Head>
        <Card className="projects">
        <h3 className="mb-4">Projects</h3>
        <Row className="m-0 ">
            <Col md={8} xs={12} sm={12} className=" p-3 text-dark capstone1 " data-aos='fade-right'>
                <a className="" href="https://lamji.gitlab.io/capstone-1/" target="_blank"> <Image src="./pro1.png" className=" projects-images image-link shadow"  /></a>
            </Col>
            <Col md={4} xs={12} sm={12} className="text-left">
            <a href="https://lamji.gitlab.io/capstone-1/" target="_blank"><h4 className="text-white" data-aos="fade-up">My First Website Portfolio</h4></a>
                <h5><b>Tools used in this project</b> </h5>
                <p data-aos="flip-left">Html 5</p>
                <p data-aos="flip-right">Css 3</p>
                <p data-aos="flip-left">Sass</p>
                <p data-aos="flip-right">Bootstrap</p>
            </Col>
        </Row>

        <Row className="m-0 ">
            <Col md={8} xs={12} sm={12} className=" text-right p-3" data-aos='fade-right'>
            <a href="https://lamji.gitlab.io/developer_pages/assets/pages/Genesis.html" target="_blank"><h4 className="text-white" data-aos="fade-up">Youth-Alive Blog</h4></a>
            <h5><b>Tools used in this project</b> </h5>
                <p data-aos="flip-left">Html 5</p>
                <p data-aos="flip-right">Css 3</p>
                <p data-aos="flip-left">Sass</p>
                <p data-aos="flip-right">Bootstrap</p>
            </Col>
            <Col md={4} xs={12} className="p-3 capstone1 " >
                <a className="" href="https://lamji.gitlab.io/developer_pages/assets/pages/Genesis.html" target="_blank"> <Image src="./pro2.jpg" className=" projects-images image-link shadow"  /></a>
            </Col>
        </Row>

        <Row className="m-0 ">
            <Col md={4} xs={12} sm={12} className=" text-right p-3" data-aos='fade-right'>
            <a href="https://covid19-tracker-v-2-git-main.lamji.vercel.app/" target="_blank"><h4 className="text-white" data-aos="fade-up">Covid19 Tracker (Dark Mode)</h4></a>
            <h5><b>Tools used in this project</b> </h5>
                <p data-aos="flip-left">React.js</p>
                <p data-aos="flip-right">Javascript ES6</p>
                <p data-aos="flip-left">Express.js</p>
                <p data-aos="flip-right">Node.js</p>
                <p data-aos="flip-right">Rest Api</p>
                <p data-aos="flip-right">MapBox</p>
                <p data-aos="flip-right">Next.js</p>
                <p data-aos="flip-right">React-sass</p>
                <p data-aos="flip-right">React-Bootstrap</p>
            </Col>
            <Col md={8} xs={12} sm={12} className="p-3 capstone2 " data-aos='fade-right'>
                <a className="" href="https://covid19-tracker-v-2-git-main.lamji.vercel.app/" target="_blank"> <Image src="./v2.png" className=" projects-images image-link shadow"  /></a>
            </Col>
        </Row>

        <Row className="m-0 ">
            <Col md={4} xs={12} sm={12} className=" text-left p-3" data-aos='fade-right'>
            <a href="https://i-track.vercel.app/" target="_blank"><h4 className="text-white" data-aos="fade-up">I-Track - Budgeting App</h4></a>
            <h5><b>Tools used in this project</b> </h5>
                <p data-aos="flip-left">React.js</p>
                <p data-aos="flip-right">Javascript ES6</p>
                <p data-aos="flip-left">Express.js</p>
                <p data-aos="flip-right">Node.js</p>
                <p data-aos="flip-right">Rest Api</p>
                <p data-aos="flip-right">MapBox</p>
                <p data-aos="flip-right">Next.js</p>
                <p data-aos="flip-right">React-sass</p>
                <p data-aos="flip-right">React-Bootstrap</p>
                <p data-aos="flip-right">MongoDB</p>
                <p data-aos="flip-right">Google Auth</p>
                <p data-aos="flip-right">JWT Authentication</p>
            </Col>
            <Col md={8} xs={12} sm={12} className="p-3 capstone2 " data-aos='fade-right'>
            <a className="" href="https://i-track.vercel.app/" target="_blank"> <Image src="./itrack.png" className="projects-images image-link shadow" data-aos='fade-left'  /></a>
            </Col>
        </Row>

        {/* <Row className="m-0 ">
            <Col md={8} xs={12} sm={12} className="p-2 text-dark capstone2">
                <a className="" href="https://budget-tracker-sigma.vercel.app/" target="_blank"> <Image src="./itrack.png" className="projects-images image-link shadow" data-aos='fade-left'  /></a>
            </Col>
            <Col md={4} xs={12} sm={12} className=" text-left p-3" data-aos='fade-right'>
            <a href="https://covid19-tracker-v-2-git-main.lamji.vercel.app/" target="_blank"><h4 className="text-white" data-aos="fade-up">I-Track - Budgeting App</h4></a>
            <h5><b>Tools used in this project</b> </h5>
                <p data-aos="flip-left">React.js</p>
                <p data-aos="flip-right">Javascript ES6</p>
                <p data-aos="flip-left">Express.js</p>
                <p data-aos="flip-right">Node.js</p>
                <p data-aos="flip-right">Rest Api</p>
                <p data-aos="flip-right">MongoDB</p>
                <p data-aos="flip-right">Google Auth</p>
                <p data-aos="flip-right">JWT Authentication</p>
                <p data-aos="flip-right">Next.js</p>
                <p data-aos="flip-right">React-sass</p>
                <p data-aos="flip-right">React-Bootstrap</p>
            </Col>
        </Row> */}
        </Card>
        </>
    )
}