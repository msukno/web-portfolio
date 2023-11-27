import { Container, Row, Col, Image} from "react-bootstrap";
import rovImg from '../../media/rov.png'

const RovEstimation = () => {
    return (
        <>
        <div className="rov2-bg"></div>
        <Container fluid className="rov2">
            <Row>
                <Col className="text" xxl={7}>
                    <div className="content">
                        <h3 className="title">Floating Litter Detection</h3>
                        <p className="story">
                            This research received partial support from both the SeaClear and Innovamare 
                            projects, and was conducted under the guidance and supervision of Ivana Palunko. 
                            It addresses the problem of plastic pollution and proposes a cost-effective model 
                            for floating litter detection at open sea and coastal areas using aerial imagery, 
                            typically captured by a camera mounted on an Unmanned Aerial Vehicle (UAV).
                            The dataset acquired during this project is publicly available. The research was published at IROS 2022, 
                            Kyoto, Japan. For more details about the detection model and the acquired dataset, 
                            please visit ieee.
                        </p>
                    </div>
                </Col>
                <Col className="media" xxl={5}>
                    <div className="img">
                        <Image fluid className="fig" src={rovImg}/>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}
 
export default RovEstimation;