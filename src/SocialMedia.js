import { ListGroup } from "react-bootstrap";

const SocialMedia = () => {
    return (  
        <div className="socialmedia-div">
            <ListGroup horizontal>
                <ListGroup.Item className="fa fa-facebook"/>
                <ListGroup.Item className="fa fa-linkedin"/>
                <ListGroup.Item className="fa fa-gitlab"/>
            </ListGroup>
        </div>
    );
}
 
export default SocialMedia;