import { Button, Image, Container, Row, Col, ListGroup} from 'react-bootstrap';
import logo from '../../multimedia/logo2.png';
import { NavLink } from 'react-router-dom';

const Thesis = ({data}) => {
    return (
        <div className={"project-container " + data["name"] + " college-view"}>
                <NavLink to={data["name"]}>
                    <Button className="button">
                        <div className="college-title-container">
                            <h2 className="col-title">{data["title"]}</h2>
                        </div>
                        <div className="image-container">
                            <Image className="image" src={data["image"]} fluid/>
                        </div>
                        <div className="college-institution-container">
                            <h4 className="col-institution">{data["institution"]}</h4>
                            <h4 className="col-department">{data["department"]}</h4>
                        </div>
                    </Button>
                </NavLink>
        </div>
    );
}



const CollegeOverview = () => {
    const bachAndMaster = {"name":"college", "title":"Bachelor and Master Thesis", "image":logo, 
                        "institution":"University of Zagreb", 
                        "department":"Faculty of Electrical Engineering and Computing (FER)"};   
    return ( 
        <Container fluid className='project-grid-container'>
            <div className="navmenu-content">
                <Row>
                    <Col className="projects-col1" lg={4}>
                        <ListGroup as="ul" horizontal>
                            <ListGroup.Item as="li"> <Thesis data={bachAndMaster}/> </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}
 
export default CollegeOverview;