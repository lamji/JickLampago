import { Card, Row, Col, Image,Nav } from 'react-bootstrap'

export default function index(){
    return(
        <Card className="card-body">
        <h4 className="text-center mb-4">Skills</h4>
        <Row className="m-0 box mx-auto">
                <Col md={4} xs={7} className="javascript"><Image src="./js.png" className="js-image" />Javascript</Col>
                <Col md={3} xs={5} className="bootstrap"><Image src="./js.png" className="js-image" />Bootstrap 4</Col>
                <Col md={2} xs={4} className="html"><Image src="./html.png" className="js-image" />Html 5</Col>
                <Col md={3} xs={8} className="css"><Image src="./css.png" className="js-image" />Css 3</Col>
        </Row>

        <Row className="m-0 box mx-auto">
                <Col md={3} xs={8} className="rb"><Image src="./rb.png" className="js-image" />React-Bootsrap</Col>
                <Col md={2} xs={4} className="sass"><Image src="./sass.png" className="js-image" />Sass</Col>
                <Col md={3} xs={5} className="mui"><Image src="./mui.png" className="js-image" />Material UI</Col>
                <Col md={4} xs={7} className="rb"><Image src="./react.png" className="js-image" />React.js</Col>
        </Row>
        <h6 className="mt-4 mb-0">Others</h6>
        <Row className="m-0 box mx-auto text-center mt-3">
            <Col>
            <Nav className="justify-content-center" activeKey="/home">
                <p>React Hooks</p>
                <p className="mx-2">-</p>
                <p>Next.js</p>
                <p className="mx-2">-</p>
                <p>Express.js</p>
                <p className="mx-2">-</p>
                <p>Mongoose</p>
                <p className="mx-2">-</p>
                <p>MongoDB</p>
                <p className="mx-2">-</p>
                <p>Graphql</p>
                <p className="mx-2">-</p>
                <p>Git Control version</p>
                <p className="mx-2">-</p>
                <p>GitLab</p>
                <p className="mx-2">-</p>
                <p>React-Chart-js</p>
              
            </Nav>
            <hr />
            </Col>
        </Row>

        <h6 className="mt-4 mb-0">Knowledge in</h6>
        <Row className="m-0 box mx-auto text-center mt-3">
            <Col>
            <Nav className="justify-content-center" activeKey="/home">
                <p>Adobe Photoshop</p>
                <p className="mx-2">-</p>  
                <p>Mobile First Approach Design</p>
                <p className="mx-2">-</p>  
                <p>Converting PSD to responsive Website</p> 
                <p className="mx-2">-</p>  
                <p>Data integration</p> 
            </Nav>
            </Col>
        </Row>

        </Card>
    )
}