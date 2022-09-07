import React from 'react';
import YouTube from 'react-youtube';
import "../Video/Video.css";

const Video = ({ videoId }) => {
  return (
    <div >
      <YouTube
        width={480}
        height={360}
        videoId={videoId}
      />
    </div>
  )
}

export default Video;