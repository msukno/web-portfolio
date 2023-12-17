import backVid from '../../multimedia/backgroundVid.webm'

const BackgroundVideo = () => {
    return (
        <div className='backVid-container'>
            <video autoPlay loop muted id="video-back" src={backVid} type="video/mp4"></video>
        </div> 
    );
}
 
export default BackgroundVideo;