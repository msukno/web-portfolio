import { Container } from "react-bootstrap";
import NavigationMenu from "../navmenu/NavigationMenu";
import SVGDropdown from "./SVGDropdown";

const Header = () => {
    return (  
        <Container fluid className="sticky-header">
            <div id="activate-dropdown"></div>
            <SVGDropdown />
            <NavigationMenu />
        </Container>
    );
}
 
export default Header;