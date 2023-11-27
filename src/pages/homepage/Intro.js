import { useEffect, useRef } from "react";
import { filterSpaces } from "./../../Utils";

const Intro = ({text}) => {
    const animeEndWmTriggered = useRef(false);
    useEffect(() =>{
        const introPar = document.getElementsByClassName("introduction")[0];
        const socialmediaIcons = Array.from(document.querySelector(".socialmedia-div").
                                            getElementsByClassName("fa"));
        const welcomeMsgLetter = document.querySelector(".welcomeMsg_div").
                                            getElementsByClassName("type3")[0];
        const textFiltered = filterSpaces(text);
        const appendTextWithTimeout = (element, text, time) => {
            setTimeout(() => {
                console.log("timeout: "+time+"ms, "+element.innerHTML);
                element.innerHTML += text;
            }, time);
        }
        const handleAnimationEndWelcomeMsg = () =>{
            if(!animeEndWmTriggered.current){
                setTimeout(() =>{
                    const textLength = textFiltered.length;
                    introPar.classList.toggle("active");
                    introPar.style["border-top-style"] = "groove";
                    setTimeout(() => {
                        socialmediaIcons.map((i)=>{
                            i.classList.toggle("activate");
                            i.style["visibility"] = "visible";
                        });
                    },textLength * 20 + 2500);
                    setTimeout(() =>{
                        for (let i=0; i<textLength; i++){
                            appendTextWithTimeout(introPar, textFiltered[i], (i+1)*20);
                        }
                    }, 2500);
                }, 2300);
                animeEndWmTriggered.current = true;
            }
        }
        animeEndWmTriggered.current = false;
        welcomeMsgLetter.addEventListener("animationend", handleAnimationEndWelcomeMsg);

        return () => {
            welcomeMsgLetter.removeEventListener("animationend", handleAnimationEndWelcomeMsg);
        }

    }, []);

    return ( 
        <div className="introduction_div">
            <p className="introduction"></p>
        </div>
     );
}

export default Intro;