import { Container,ListGroup, Button } from "react-bootstrap";

const HomeDropdownContent = () => {
    const navMenuItems = ["Home", "About", "College", "Projects"];
    return ( 
        <Container className="home-dropdown-content">
            <ListGroup className="navmenu-button-group" horizontal>
                    <ListGroup.Item>
                        <Button id="home-button">Home</Button>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button id="about-button">About</Button>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button id="college-button">College</Button>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button id="projects-button">Projects</Button>
                    </ListGroup.Item>
            </ListGroup>
        </Container>
     );
}
 
export default HomeDropdownContent;