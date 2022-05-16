import React, { useRef, useState } from 'react';
import "./Video.css"
import VideoFooter from './VideoFooter';

function Video() {
    const videoRef = useRef(null);

    const [playing, setPlaying] = useState(false);

    const handleVideoPress = () => {
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        else{
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className='video'>
    {/*
            <video className='video__player'
                src='https://www.youtube.com/embed/z2OXnXu3_nc?controls=0&autoplay=1'
                loop
                ref={videoRef}
                onClick={handleVideoPress}>
            </video>
    */}
            <iframe className='video__player'
                src="https://www.youtube.com/embed/z2OXnXu3_nc?controls=0&autoplay=1"
                frameborder="0">
            </iframe>

            <VideoFooter />

        </div>
    );
}

export default Video;
