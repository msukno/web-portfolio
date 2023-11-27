import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WelcomeMsg from './WelcomeMsg';
import Introduction from './Introduction';
import IntroVid from './IntroVid';
import SocialMedia from './SocialMedia';
import { NavLink } from 'react-bootstrap';
import BackgroundVideo from './BackgroundVideo';

function HomepageContent() {
  const welcomeMsgtext_top = "Welcome to My";
  const welcomeMsgtext_bottom= "Web Portfolio";
  const introduction_text = `Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.`
              
  return (
    <>
      <BackgroundVideo />
      <Container fluid className='gridContainer'>
        <Row>
          <Col className="wmAndIntroCol" xxl={8}>
            <WelcomeMsg message1={welcomeMsgtext_top} message2={welcomeMsgtext_bottom} />
            <Introduction text={introduction_text} />
            <SocialMedia />
          </Col>
          <Col className="vidIntroCol" xxl={4}>
            <IntroVid />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomepageContent;