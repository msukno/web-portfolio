import { Col, Container, Row, Image } from "react-bootstrap";
import aboutImg from '../../media/aboutImg-trans.png';
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
                            I received my BSc and MSc degrees in Computer Science from the University of Zagreb, Faculty of Electrical Engineering and Computing (UNIZG FER), Zagreb, Croatia in 2017 and 2020, respectively. My academic journey initially centered around machine learning and deep learning, leading me to a research role at the Laboratory for Intelligent Autonomous Systems (LARIAT) at the University of Dubrovnik. While I considered pursuing a Ph.D., I decided to keep my career options open. Recently, I've embarked on a new direction in my career. My passion lies in developing software that people can seamlessly integrate into their daily lives, making their experiences better. For me, that is the best part of being a developer. Front-end development has become my focus, and this webpage represents my first project in this domain. While it's just the beginning, I am genuinely enthusiastic about its potential and look forward to sharing more in the future. For further insights into my previous projects and additional details about this webpage, please explore the Projects section in the menu. Outside of my professional life, I dedicate my leisure time to sports, with a particular fondness for soccer, although I am open to participating in a range of physical activities.
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