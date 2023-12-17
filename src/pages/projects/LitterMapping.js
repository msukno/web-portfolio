import { Container, Row, Col, Image} from "react-bootstrap";
import mappingImg from '../../multimedia/mappingImg.png'
import mappingVid from "../../multimedia/mappingVid.mp4"

const LitterMapping = () => {
    return (
        <>
        <div className="mapping2-bg"></div>
        <Container fluid className="mapping2">
            <Row>
                <Col className="text" xxl={7}>
                    <div className="content">
                        <h3 className="title">Floating Litter Mapping</h3>
                        <p className="story">
                        The project builds upon the Litter Detection project, leveraging a litter 
                        detection model mounted on an Unmanned Aerial Vehicle (UAV) and its odometry 
                        data to estimate the 3D coordinates of litter from 2D pixel coordinates. 
                        Our approach integrates the litter detection model with inverse projection 
                        and probabilistic occupancy grid mapping techniques to introduce a
                        comprehensive framework for on-board litter localization and mapping. 
                        As the work is still ongoing, detailed information regarding its progress 
                        and outcomes is not yet available.
                        </p>
                    </div>
                    <div className="fig-container">
                        <Image fluid className="figure" src={mappingImg}/>
                    </div>
                </Col>
                <Col className="media" xxl={5}>
                    <div className="vid">
                        <video autoPlay loop muted id="mapping2-vid" src={mappingVid} type="video/mp4"></video>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}
 
export default LitterMapping;