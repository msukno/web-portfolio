import { useEffect, useRef } from "react";
import { ListGroup } from "react-bootstrap";

const WelcomeMsg = ({message1, message2}) => {

    const animeWmBlurrActivated = useRef(false);
    const listAnimeTypes = ["type1", "type2", "type3"];
    const msg1ClassList = message1.split("").map((c,i)=>{
        const animeType = listAnimeTypes[i%3];
        const spaceItem = c.indexOf(' ') >= 0;
        return [c, spaceItem ? "listSpaceItem" : animeType + " letter"];
    });
    const msg2ClassList = message2.split("").map((c,i)=>{
        const animeType = listAnimeTypes[i%3];
        const spaceItem = c.indexOf(' ') >= 0;
        return [c, spaceItem ? "listSpaceItem" : animeType + " letter"];
    });

    useEffect(() => {
        const wmDiv = document.querySelector(".welcomeMsg_div");
        const wmLetters = Array.from(wmDiv.getElementsByClassName("letter"));
        const welcomeMsg = document.getElementsByClassName("welcomeMsg_div")[0];

        animeWmBlurrActivated.current = false;
        const handleAnimeEnd_WmBlurr = (event) => {
            if(!animeWmBlurrActivated.current){
                setTimeout(()=>{ 
                    wmLetters.map((letter)=>{
                        letter.classList.toggle("activated");
                    })
    
                }, 1500);
                animeWmBlurrActivated.current = true;
            }
        }
        welcomeMsg.addEventListener("animationend", handleAnimeEnd_WmBlurr);

        return () => {
            welcomeMsg.removeEventListener("animationend", handleAnimeEnd_WmBlurr);
        }
    },[]);
    return (  
        <div className="welcomeMsg_div">
            <ListGroup className="topMsg" as="ul" horizontal>
                {
                    msg1ClassList.map((i, index)=>{
                        return <ListGroup.Item as="li" className={i[1]} key={"msg1_"+index}>{i[0]}</ListGroup.Item>
                    })
                }
            </ListGroup>
            <ListGroup className="botMsg" as="ul" horizontal>
                {
                    msg2ClassList.map((i, index)=>{
                        return <ListGroup.Item as="li" className={i[1]} key={"msg2_"+index}>{i[0]}</ListGroup.Item>
                    })
                }
            </ListGroup>
        </div>
    );
}
 
export default WelcomeMsg;