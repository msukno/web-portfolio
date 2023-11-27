import backVid from './media/backvid_cut.mp4'

const BackgroundVideo = () => {
    return (
        <div className='backVid-container'>
            <video autoPlay loop muted id="video-back" src={backVid} type="video/mp4"></video>
        </div> 
    );
}
 
export default BackgroundVideo;