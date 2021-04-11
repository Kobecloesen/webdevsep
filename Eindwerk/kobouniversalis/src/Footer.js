
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Footer = () => {
    return ( 
        <div className="footer">
            <Container fluid="md" flex>
                <Row className="contact justify-content-md-center"><h2>Contact</h2></Row>
                <Row className="firstRow">
                    <Col>WHERE TO FIND ME</Col>
                    <Col>SEND ME A NOTE</Col>
                    <Col>FOLLOW ME</Col>
                </Row>
                <Row>
                    <Col>
                        <div>Tiensesteenweg 167, <br></br>3010 Leuven</div> 
                    </Col>
                    <Col>
                        <div>cloesen.kobe@gmail.com<br></br> Tel: +32 493 64 91 22</div>
                    </Col>
                    <Col className="icons">
                        <a href="https://www.instagram.com/kobe.cloesen/"><img className="icons " src="images/instagram.svg" width="35" alt=""/></a> 
                         <a href="https://www.linkedin.com/in/kobe-cloesen/"><img className="icons" src="images/linkedin.svg" width="35"alt=""/></a>  
                         <a href="https://github.com/Kobecloesen"><img className="icons" src="images/github.svg" width="35" alt=""/></a>
                    </Col>
                </Row>

  
                <Row className="justify-content-md-center">
                    &copy; {new Date().getFullYear()} by KOBE CLOESEN
                </Row>
            </Container>
        </div>
     );
}
 
export default Footer;