
const SVGPath = ({params}) => {
    return (
        <path className={params["class"]} id={params["id"]} d={params["d"]}/>
    );
}
 
export default SVGPath;