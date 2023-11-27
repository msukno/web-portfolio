import { Container } from "react-bootstrap";
import SVGPath from "./SVGPath";
import { useEffect, useState } from "react";
import { computeDropdownButtonPosition } from "../../Utils";

const SVGDropdown = () => {
    const path1_params = {"class":"drop_path1", "id":"svgPath1", 
                                "d":"M 0 7 L 112 7 L 115 9.2 L 118 7 L 130 7" };
    const path2_params = {"class":"drop_path2", "id":"svgPath2", 
                                "d":"M 113.3 7 L 115 8.2 L 116.7 7"};
    const path3_params = {"class":"drop_path3", "id":"svgPath3", 
                                "d":"M 112 7 L 115 9.2 L 118 7"};
    const path4_params = {"class":"drop_path4", "id":"svgPath4", 
                                "d":"M 113.3 7 L 115 8.2 L 116.7 7"};

    const svgViewBoxMonitor = "25 3 100 7";
    const svgViewBoxMobile = "90 4.5 35 5";
    const [isMobileDevice, setDevice] = useState(window.innerHeight > window.innerWidth);
    
    useEffect(() =>{
        console.log("mounting dropdown");
        computeDropdownButtonPosition();
        const dropPath1 = document.getElementsByClassName("drop_path1")[0];
        const dropPath2 = document.getElementsByClassName("drop_path2")[0];
        const activateDrop = document.getElementById("activate-dropdown");
        const handleAnimeEndDropPth1 = () => {
            console.log("uso u HANDLEEE");
            dropPath2.classList.toggle("activated");
            setTimeout(()=>{
                activateDrop.style.visibility = "visible";
            }, 3000);
        }
        const handleResize = () => {
            computeDropdownButtonPosition();
            setDevice(window.innerHeight > window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        dropPath1.addEventListener("animationend", handleAnimeEndDropPth1);
        // dropPath1.addEventListener("animationstart")

        return () =>{
            dropPath1.removeEventListener("animationend", handleAnimeEndDropPth1);
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return (
        <Container fluid className="svgDropdownPanel">
            <svg width="100%" height="100%" viewBox={isMobileDevice ? 
                                                    svgViewBoxMobile : svgViewBoxMonitor} 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    preserveAspectRatio="xMidYMid meet">
                <SVGPath params={path1_params} />
                <SVGPath params={path2_params} />
                <SVGPath params={path3_params} />
                <SVGPath params={path4_params} />
            </svg>
        </Container>
    );
}
 
export default SVGDropdown;