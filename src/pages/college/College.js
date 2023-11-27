import { Container, Row, Col, Figure} from "react-bootstrap";
import bachImg from "../../media/zavrsni12.png"
import masterImg from "../../media/diplomski.png"
const College = () => {
    return (
        <>
            <div className="college-bg"></div>
            <div className="college-overlay"></div>
            <Container fluid className="college2">
            <Row>
                <Col className="text" xxl={7}>
                    <h3 className="title">Bachelor and Master Thesis</h3>
                    <p className="story">During the first two years of my undergraduate program, 
                        I was actively exploring my interests. It was in my third academic year that 
                        I developed an interest in the disciplines of probability and statistics. 
                        Eventually, this led me to delve into the field of machine learning. Under the 
                        guidance of my mentor, Marko Subašić, I conducted my bachelor's thesis, titled
                        ' Detection of Traffic Participants in Traffic Photographs Using Deep Learning”. 
                        In this project, I constructed a Convolutional Neural Network (CNN) to perform a
                        binary classification task, distinguishing between pedestrians and vehicles 
                        within the images. Also, to ensure accurate object localization, I implemented 
                        the sliding window technique as an integral component of the object localization
                        pipeline. The CNN was trained using publicly available datasets containing 
                        images of both vehicles and pedestrians. Subsequently, the model's performance
                        was evaluated using a dataset collected specifically for this project.My 
                        master's thesis, similarly conducted under the guidance of Marko, was titled 
                        ' Detection and Reading of Vehicle Registrations Using Deep Learning”.
                        Within this project, I implemented an RPnet,a deep convolutional model 
                        specifically designed for license plate detection and recognition. 
                        The model's performance was assessed using the publicly available CCPD dataset.
                    </p>
                </Col>
                <Col className="media" xxl={5}>
                    <div className="img-zavrsni">
                        <Figure>
                            <Figure.Image src={bachImg} />
                            <Figure.Caption>
                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </Figure.Caption>
                        </Figure>
                    </div>
                    <div className="img-diplomski">
                        <Figure>
                            <Figure.Image src={masterImg} />
                            <Figure.Caption>
                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </Figure.Caption>
                        </Figure>
                    </div>
                </Col>
            </Row>
            </Container>
        </>
    );
}
 
export default College;