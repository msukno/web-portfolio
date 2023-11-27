import { Image } from "react-bootstrap";
import gvardiol from './media/gvardiol_transparent.png'

const IntroVid = () => {
    return (  
        <div className="introVid_div">
            <Image className="gvardiol_image" src={gvardiol} fluid/>
        </div>
    );
}
 
export default IntroVid;