import { Container, Row } from "react-bootstrap";

const NoOverview = ({message}) => {
    return (
        <Container fluid className='project-grid-container'>
            <div className="navmenu-content">
                <Row>
                    <h5 className="text"> {message} </h5>
                </Row>
            </div>
        </Container>
    );
}
 
export default NoOverview;