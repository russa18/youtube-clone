import React from 'react';
import "./Videocard.css";
// import ytimg from "../Navbar/youtube.png";


export default function Videocard(props) {


    const { image, title, channel, views, timestamp, channelImage } = props;
    return (

        <div className='video-wrapper'>
            <div className='thumbnail'>
                <img src={image} alt="" />
            </div>

            <div className='video-details'>
                <img className='yt-avatar' src={channelImage} alt="" />

                <div className='video-desc'>
                    <div className='video-title'>
                        {title}
                    </div>
                    <div className='yt-name'>
                        {channel}
                    </div>
                    <div className='yt-counts'>
                        <div className='yt-views'>
                            {views} views •
                        </div>

                        <div className='yt-time'>
                            {timestamp}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
