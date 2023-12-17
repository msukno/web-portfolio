import { Button, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import mappingImg from '../../multimedia/maplogo.png';
import rovImg from '../../multimedia/rov2.png';
import detectionImg2 from '../../multimedia/detlogo.png'
import icon_portfolio from '../../multimedia/portfolio_icon.png'

const Project = ({data}) => {
    return (  
            <div className={"project-container " + data["name"]}>
                <NavLink to={data["name"]}>
                    <Button className="button">
                        <div className="title-container">
                            <h2 className="title">{data["title"]}</h2>
                        </div>
                        <div className="image-container">
                            <Image className="image" src={data["image"]} fluid/>
                        </div>
                        <div className="institution-container">
                            <h4 className="institution">{data["institution"]}</h4>
                            <h4 className="department">{data["department"]}</h4>
                        </div>
                    </Button>
                </NavLink>
            </div>
    );
}

const ProjectsOverview = () => {
    const project1Data = {"name":"litter-detection", "title":"Floating Litter Detection", "image":detectionImg2, 
                        "institution":"University of Dubrovnik", "department":"LARIAT"};
    const project2Data = {"name":"litter-mapping", "title":"Floating Litter Mapping", "image":mappingImg, 
                        "institution":"University of Dubrovnik", "department":"LARIAT"};
    const project3Data = {"name":"rov-estimation", "title":"ROV 3D Position Estimation", "image":rovImg, 
                        "institution":"University of Dubrovnik", "department":"LARIAT"};
    const project4Data = {"name":"webportfolio", "title":"Personal Web Portfolio", "image":icon_portfolio, 
                        "institution":"", "department":"Personal project"};   
    return (
        <Container fluid className='project-grid-container'>
            <div className="navmenu-content">
                <Row>
                    <Col className="projects-col1" xxl={4}>
                        <ListGroup as="ul" horizontal>
                            <ListGroup.Item as="li"> <Project data={project1Data}/> </ListGroup.Item>
                            <ListGroup.Item as="li"> <Project data={project2Data}/> </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col className="projects-col2" xxl={4}>
                        <ListGroup as="ul" horizontal>
                            <ListGroup.Item as="li"> <Project data={project3Data}/> </ListGroup.Item>
                            <ListGroup.Item as="li"> <Project data={project4Data}/> </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}
 
export default ProjectsOverview;