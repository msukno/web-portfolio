import { Col,Container,Row } from "react-bootstrap";

const WebPortfolio = () => {
    return ( 
        <>
        <div className="portfolio-bg"></div>
        <Container className="about-portfolio" fluid>
            <Row>
                <Col className="content">
                    <div className="title">Tools & Tech</div>
                    <div className="text">
                        The webpage was created using the React.js technology. The main programming
                        languages used for the front-end development are HTML5, CSS, JavaScript, 
                        and SCSS. To make the page fully responsive I used the Boostrap 5 library.
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}
 
export default WebPortfolio;