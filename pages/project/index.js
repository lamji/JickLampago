import { Card, Row, Col, Image,Nav } from 'react-bootstrap'

export default function index(){
    return(
        <Card className="projects">
        <h3 className="mb-4">Projects</h3>
        <Row className="m-0 ">
            <Col md={6} xs={12} className="bg-light p-3 text-dark">
                <a className="" href="https://lamji.gitlab.io/capstone-1/" target="_blank"> <Image src="./pro1.png" className="projects-images image-link shadow" /></a>
                <a href="https://lamji.gitlab.io/capstone-1/" target="_blank"><h6 className=" title">My First Website Portfolio</h6></a>
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
            </Col>
            <Col md={6} xs={12} className="bg-light p-3 text-dark">
                <a className="" href="https://lamji.gitlab.io/developer_pages/assets/pages/Genesis.html" target="_blank"> <Image src="./pro2.jpg" className="projects-images shadow image-link" /></a>
                <a href="https://lamji.gitlab.io/developer_pages/assets/pages/Genesis.html" target="_blank"><h6 className=" title">Youth-Alive Blog</h6></a>
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
            </Col>
        </Row>
        <hr />
        <Row className="m-0 ">
            <Col md={6} xs={12} className="bg-light p-3 text-dark">
                <a className="" href="https://covid-19-tracker-bay-nu.vercel.app/?fbclid=IwAR1dfYqX7e4vQ1gWJ-aD1the4QHZQm5RWNM-vEuLnWtT6WZ7gnypqNJVR8s" target="_blank"> <Image src="./covid.png" className="projects-images image-link shadow" /></a>
                <a href="https://covid-19-tracker-bay-nu.vercel.app/?fbclid=IwAR1dfYqX7e4vQ1gWJ-aD1the4QHZQm5RWNM-vEuLnWtT6WZ7gnypqNJVR8s" target="_blank"><h6 className=" title">Covid19 Tracker</h6></a>
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
            </Col>
            <Col md={6} xs={12} className="bg-light p-3 text-dark ">
                <a className="" href="https://budget-tracker-sigma.vercel.app/" target="_blank"> <Image src="./itrack.png" className="projects-images image-link shadow" /></a>
                <a href="https://budget-tracker-sigma.vercel.app/" target="_blank"><h6 className=" title">iTrack - Record and track your expenses</h6></a>
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
            </Col>
        </Row>
        </Card>
    )
}