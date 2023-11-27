const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

export const computeDropdownButtonPosition = () => {
    let svgPath = document.getElementById("svgPath1");
    let svgPoint1 = svg.createSVGPoint();
    let svgPoint2 = svg.createSVGPoint();
    let svgPoint3 = svg.createSVGPoint();
    svgPoint1.x = 112.0;
    svgPoint1.y = 7.0;
    svgPoint2.x = 118.0;
    svgPoint2.y = 7.0;
    svgPoint3.x = 115;
    svgPoint3.y = 9.2;
    let screenPointLeft = svgPoint1.matrixTransform(svgPath.getScreenCTM());
    let screenPointRight = svgPoint2.matrixTransform(svgPath.getScreenCTM());
    let screenPointBottom = svgPoint3.matrixTransform(svgPath.getScreenCTM());

    let width = screenPointRight.x - screenPointLeft.x;
    let height = screenPointBottom.y - screenPointLeft.y;
    let dx = 0.3 * width;
    let dy = 0.5 * height;

    let button_width = width + 2*dx;
    let button_height = height + 2*dy;
    let button_position_x_absolute = screenPointLeft.x - dx;
    let button_position_y_absolute = screenPointLeft.y - dy;

    let button = document.getElementById("activate-dropdown");
    button.style["left"] = button_position_x_absolute + "px";
    button.style["top"] = button_position_y_absolute + "px";
    button.style["width"] = button_width + "px";
    button.style["height"] = button_height + "px";
};

export const filterSpaces = (text)=> {
    let textFiltered = "";
    let spaceCharFlag = false;
    let textLength = text.length;
    for(let i=0; i<textLength; i++){
        let c = text[i];
        if(c.charCodeAt(0) == 32){
            if(!spaceCharFlag)
                textFiltered += c;
            spaceCharFlag = true;
        }else{
            textFiltered += c;
            spaceCharFlag = false;
        }
    }
    return textFiltered;
}