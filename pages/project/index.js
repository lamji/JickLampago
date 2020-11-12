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
            <Col md={6} xs={12} className="bg-light p-3 text-dark">
                <a className="" href="https://lamji.gitlab.io/capstone-1/" target="_blank"> <Image src="./pro1.png" className="projects-images image-link shadow" data-aos='fade-right' /></a>
                <a href="https://lamji.gitlab.io/capstone-1/" target="_blank"><h4 className=" title text-dark">My First Website Portfolio</h4></a>
                <h6 className=" title mb-0">
                    
                    <Nav className="justify-content-center" activeKey="/home">
                    <b>Tools:</b>
                        <p className="ml-3">Html 5</p>
                        <p className="mx-2">-</p>
                        <p>Css 3</p>
                        <p className="mx-2">-</p>
                        <p>Sass</p>
                        <p className="mx-2">-</p>
                        <p>Bootstrap</p>
                    </Nav>
                </h6>
                <hr />
            </Col>
            <Col md={6} xs={12} className="bg-light p-3 text-dark">
                <a className="" href="https://lamji.gitlab.io/developer_pages/assets/pages/Genesis.html" target="_blank"> <Image src="./pro2.jpg" className="projects-images shadow image-link" data-aos='fade-left' /></a>
                <a href="https://lamji.gitlab.io/developer_pages/assets/pages/Genesis.html" target="_blank"><h4 className=" title text-dark">Youth-Alive Blog</h4></a>
                <h6 className="text-left title mb-0">
                    <Nav className="justify-content-center" activeKey="/home">
                    <b>Tools:</b>
                        <p className="ml-3">Html 5</p>
                        <p className="mx-2">-</p>
                        <p>Css 3</p>
                        <p className="mx-2">-</p>
                        <p>Sass</p>
                        <p className="mx-2">-</p>
                        <p>Bootstrap</p>
                    </Nav>
                </h6>
                <hr />
            </Col>
          
        </Row>
        
        <Row className="m-0 ">
            <Col md={6} xs={12} className="bg-light p-3 text-dark">
                <a className="" href="https://covid-19-tracker-bay-nu.vercel.app/?fbclid=IwAR1dfYqX7e4vQ1gWJ-aD1the4QHZQm5RWNM-vEuLnWtT6WZ7gnypqNJVR8s" target="_blank"> <Image src="./v2.png" className="projects-images image-link shadow" data-aos='fade-right' /></a>
                <a href="https://covid-19-tracker-bay-nu.vercel.app/?fbclid=IwAR1dfYqX7e4vQ1gWJ-aD1the4QHZQm5RWNM-vEuLnWtT6WZ7gnypqNJVR8s" target="_blank"><h4 className=" title text-dark">Covid19 Tracker (Light Mode)</h4></a>
                <a href="https://covid19-tracker-v-2-git-main.lamji.vercel.app/" target="_blank"><h4 className=" title text-dark">Covid19 Tracker (Dark Mode)</h4></a>
                <h6 className=" title mb-0">
                    <Nav className="justify-content-center" activeKey="/home">
                    <b>Tools:</b>
                        <p className="ml-3">React.js</p>
                        <p className="mx-2">-</p>
                        <p className="ml-3">Javascript Es6</p>
                        <p className="mx-2">-</p>
                        <p className="ml-3">Node.js</p>
                        <p className="mx-2">-</p>
                        <p>Next.js</p>
                        <p className="mx-2">-</p>
                        <p>Sass</p>
                        <p className="mx-2">-</p>
                        <p>React-Bootstrap</p>
                        <p className="mx-2">-</p>
                        <p>Third Party API</p>
                        <p className="mx-2">-</p>
                        <p>MapBoxgl</p>
                    </Nav>
                </h6>
                <hr />
            </Col>
            <Col md={6} xs={12} className="bg-light p-3 text-dark ">
                <a className="" href="https://budget-tracker-sigma.vercel.app/" target="_blank"> <Image src="./itrack.png" className="projects-images image-link shadow" data-aos='fade-left'  /></a>
                <a href="https://budget-tracker-sigma.vercel.app/" target="_blank"><h4 className=" title text-dark">iTrack - Record and track your expenses</h4></a>
                <h6 className="text-left title mb-0">
                    <Nav className="justify-content-center" activeKey="/home">
                    <b>Tools:</b>
                        <p className="ml-3">React.js</p>
                        <p className="mx-2">-</p>
                        <p className="ml-3">Javascript Es6</p>
                        <p className="mx-2">-</p>
                        <p className="ml-3">Node.js</p>
                        <p className="mx-2">-</p>
                        <p>Next.js</p>
                        <p className="mx-2">-</p>
                        <p>Express.js</p>
                        <p className="mx-2">-</p>
                        <p>Mongoose</p>
                        <p className="mx-2">-</p>
                        <p>MongoDb</p>
                        <p className="mx-2">-</p>
                        <p>Google Auth</p>
                        <p className="mx-2">-</p>
                        <p>React-charts</p>
                        <p className="mx-2">-</p>
                        <p>Sass</p>
                        <p className="mx-2">-</p>
                        <p>React-Bootstrap</p>
                    </Nav>
                </h6>
                <hr />
            </Col>
        </Row>
        </Card>
        </>
    )
}