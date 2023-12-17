import { Container, Row, Col, Image} from "react-bootstrap";
import rovImg from '../../multimedia/rovImg.jpg'

const RovEstimation = () => {
    return (
        <>
        <div className="rov2-bg"></div>
        <Container fluid className="rov2">
            <Row>
                <Col className="text" xxl={7}>
                    <div className="content">
                        <h3 className="title">ROV Position Estimation</h3>
                        <p className="story">
                        This project was carried out in partnership with my friend and former 
                        colleague, Antun Đuraš, under the guidance of Ivana Palunko. The goal was 
                        to develop an algorithm that utilizes measurements from both Unmanned Aerial 
                        Vehicle (UAV) and Unmanned Underwater Vehicle (UUV) to compute the UUV 
                        position in global coordinate system (GPS). By using the camera stream 
                        information mounted on an UAV together with its odometry and UUV depth 
                        readings, the algorithm recovers the 3D position of UUV from 2D pixel
                        coordinates. Furthermore, as part of this project's scope, we published a 
                        paper titled 'Recovering the 3D UUV Position using UAV Imagery in 
                        Shallow-Water Environments' at 
                        <a href="https://www.uasconferences.com/2022_icuas/"> ICUAS, 2022 </a>.
                         <br></br> &emsp;For more information about the
                        paper and developed algorithm please visit 
                         <a href="https://ieeexplore.ieee.org/abstract/document/9836195"> ieee </a>. 
                         Due to a tight 
                        schedule, Antun and I ended up in a four-day writing frenzy with minimum sleep. 
                        Looking back, I can't help but appreciate how positively intense and 
                        valuable whole experience turned out to be.
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