import { useEffect, useRef, useState } from "react";
import { Col, Container, Image, ListGroup, Row, Button } from "react-bootstrap";
import ProjectsOverview from "./ProjectsOverview";
import CollegeOverview from "./CollegeOverview";
import { NavLink } from "react-router-dom";
import AboutOverview from "./AboutOverview";
import HomeOverview from "./HomeOverview";

const EmptyContent = () => {
    return (
        <Container fluid className='project-grid-container' />
    );
}

const NavigationMenu = () => {

    const contentComponents = [<EmptyContent />, <ProjectsOverview/>,
                                    <CollegeOverview />, <AboutOverview /> ,<HomeOverview />];
    const [activeContentComponent, setContent] = useState(contentComponents[1]);
    const navMenuItems = ["Home", "About", "College", "Projects"];
    const activatedButtons = useRef([]);

    useEffect(() => {
        const activateDrop = document.getElementById("activate-dropdown");
        const buttonsContainer = document.querySelector(".navmenu-buttons");
        const buttons = Array.from(buttonsContainer.getElementsByClassName("btn"));
        const navMenu = document.getElementsByClassName("navigation-menu")[0];
        const dropPath3 = document.getElementsByClassName("drop_path3")[0];
        const dropPath4 = document.getElementsByClassName("drop_path4")[0];

        const handleMouseLeave = (event) => {
            setContent(contentComponents[0]);
            event.target.style["display"] = "none";
            dropPath3.classList.toggle("activated");
            dropPath4.classList.toggle("activated");
        }
        const handleHover = (event) => {
            const element = event.target;
            if(!dropPath3.classList.value.includes("activated")){
                dropPath3.classList.toggle("activated");
                dropPath4.classList.toggle("activated");
            }

            for(let i=0; i<activatedButtons.current.length; i++){
                activatedButtons.current[i].classList.toggle("activated");
                activatedButtons.current.pop()
            }
            element.classList.toggle("activated");
            activatedButtons.current.push(element);

            if(element.id.includes("activate-drop")){
                setContent(contentComponents[0]);
                navMenu.style.display = "block";
            }else if(element.id.includes("projects")){
                setContent(contentComponents[1]);

            }else if(element.id.includes("college")){
                setContent(contentComponents[2]);
            }else if(element.id.includes("about")){
                setContent(contentComponents[3]);
            }else if(element.id.includes("home")){
                setContent(contentComponents[4]);
            }else{
                setContent(contentComponents[0])
            }
        }

        buttons.push(activateDrop);
        buttons.map((btn) => btn.addEventListener("mouseenter", handleHover));
        navMenu.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            buttons.map((btn) => btn.removeEventListener("mouseenter", handleHover));
        }
    }, []);

    return (  
        <Container fluid className="navigation-menu">
                <ListGroup className="navmenu-buttons" horizontal>
                    {navMenuItems.map((i, index) => {
                        if(i.toLowerCase().includes("home") || i.toLowerCase().includes("about")){
                            return (
                                <ListGroup.Item as="li" key={index}>
                                    <NavLink to={i.toLowerCase().includes("home")? "/web-portfolio":i.toLowerCase()}>
                                        <Button id={i.toLowerCase()+"-button"}>{i.toUpperCase()}</Button>
                                    </NavLink>
                                </ListGroup.Item>
                            )
                        }else{
                            return (
                                <ListGroup.Item as="li" key={index}>
                                    <Button id={i.toLowerCase()+"-button"}>{i.toUpperCase()}</Button>
                                </ListGroup.Item>
                            )
                        }
                    })}
                </ListGroup>

                {activeContentComponent}
        </Container>
    );
}
 
export default NavigationMenu;