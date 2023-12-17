import { Container, Row, Col, Image} from "react-bootstrap";
import surfaceImg from '../../multimedia/detimg.png'
import surfaceVid from "../../multimedia/detection.mp4"

const LitterDetection = () => {
    return (
        <>
        <div className="detection2-bg"></div>
        <Container fluid className="detection2">
            <Row>
                <Col className="text" xxl={6}>
                    <div className="content">
                        <h3 className="title">Floating Litter Detection</h3>
                        <p className="story">
                            This research received partial support from both the 
                            <a href="https://seaclear-project.eu/SeaClear"> SeaClear </a>
                            and <a href="https://programming14-20.italy-croatia.eu/web/innovamare"> Innovamare </a> 
                            projects, and was conducted under the guidance and supervision of Ivana Palunko. 
                            It addresses the problem of plastic pollution and proposes a cost-effective model 
                            for floating litter detection at open sea and coastal areas using aerial imagery, 
                            typically captured by a camera mounted on an Unmanned Aerial Vehicle (UAV).
                            The dataset acquired during this project is publicly available. The research was published
                             at <a href="https://iros2022.org/"> IROS 2022, Kyoto, Japan </a>
                            For more details about the detection model and the acquired dataset, 
                            please visit <a href="https://ieeexplore.ieee.org/abstract/document/9981320">ieee</a>.
                        </p>
                    </div>
                </Col>
                <Col className="media" xxl={6}>
                    <div className="img">
                        <Image fluid className="fig" src={surfaceImg}/>
                    </div>
                    <div className="vid">
                        <video autoPlay loop muted id="surface-det-vid" src={surfaceVid} type="video/mp4"></video>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}
 
export default LitterDetection;