import { ListGroup, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SocialMedia = () => {
    return (
        <div className="socialmedia-div">
            <ListGroup horizontal>
                <NavLink to={"https://www.linkedin.com"}>
                    <ListGroup.Item className="fa fa-linkedin" />
                </NavLink>
            </ListGroup>
        </div>
    );
}

export default SocialMedia;