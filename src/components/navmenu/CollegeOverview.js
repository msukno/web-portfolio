import { Button, Image, Container, Row, Col, ListGroup} from 'react-bootstrap';
import detectionImg from '../../media/detection.png';
import { NavLink } from 'react-router-dom';

const Thesis = ({data}) => {
    return ( 
        <div className={"project-container " + data["name"]}>
            <NavLink to={data["name"]}>
                <Button className="button">
                    <h2 className="title">{data["title"]}</h2>
                    {/* <div className="image-container">
                        <Image className="image" src={data["image"]} fluid/>
                    </div> */}
                    <h3 className="institution">{data["institution"]}</h3>
                    <h4 className="department">{data["department"]}</h4>
                </Button>
            </NavLink>
            </div>
    );
}



const CollegeOverview = () => {
    const bachelorThesis = {"name":"litter-detection", "title":"Floating Litter Detection", "image":detectionImg, 
                        "institution":"Faculty of Electrical Engineering and Computing", 
                        "department":"LARIAT"};
    const masterThesis = {"name":"litter-mapping", "title":"Floating Litter Mapping", "image":detectionImg, 
                        "institution":"Faculty of Electrical Engineering and Computing", 
                        "department":"LARIAT"};
    const bachAndMaster = {"name":"college", "title":"Bachelor and Master Thesis", "image":detectionImg, 
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