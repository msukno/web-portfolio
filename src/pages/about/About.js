import { Col, Container, Row, Image } from "react-bootstrap";
import aboutImg from '../../multimedia/aboutImg-trans.png';
import { useEffect } from "react";

const About = () => {
    useEffect(() =>{
        const personDiv = document.getElementById("person-img");
        const mediaDiv = document.getElementsByClassName("media")[0];
        const adjustImagePosition = () => {
            const computedStyle1 = window.getComputedStyle(personDiv);
            const computedStyle2 = window.getComputedStyle(mediaDiv);
            personDiv.style.top = parseFloat(computedStyle1.height)*0.3
            const diff = parseFloat(computedStyle2.height) - parseFloat(computedStyle1.height);
            const d2 = parseFloat(computedStyle1.height) * 0.3;
            personDiv.style.top = diff + d2 + "px";
        
        }
        window.addEventListener("resize", adjustImagePosition);
        setTimeout(adjustImagePosition,100);
        return () => {
            window.removeEventListener("resize", adjustImagePosition);
        }

    }, []);
    return (
        <Container fluid className="about">
            <Row className="wall">
                    <Col className="text overlay" xxl={7}>
                        <div className="textdiv">
                            <h3 className="title">Background</h3>
                            <p className="background">
                                I received my BSc and MSc degrees in Computer Science from the University
                                of Zagreb, Faculty of Electrical Engineering and Computing (UNIZG FER),
                                Zagreb, Croatia in 2017 and 2020, respectively. <br></br> &emsp;My academic journey 
                                initially centered around machine learning and deep learning, leading 
                                me to a research role at the Laboratory for Intelligent Autonomous 
                                Systems (LARIAT) at the University of Dubrovnik. Although I considered 
                                pursuing a Ph.D., I chose to explore other career pathways. I have
                                a keen interest in crafting software solutions that enhance everyday 
                                life. <br></br> &emsp;For further insights into my previous projects, please explore
                                the Projects section in the menu. When I’m not coding, I enjoy staying
                                active, usually playing soccer, but I’m always ready to engage in various 
                                sports activities.
                            </p>
                        </div>
                    </Col>
                    <Col className="media overlay" xxl={5}>
                        <div className="image" id="person-img">
                            <Image id="person-fig" src={aboutImg} fluid/>
                        </div>
                    </Col>
            </Row>
            <Row className="floor" />
        </Container>
    );
}
 
export default About;