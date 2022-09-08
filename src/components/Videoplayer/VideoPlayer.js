
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Video from './../Video/Video'
import './VideoPlayer.css';
// import RecommendedVideos from '../RecommendedVideos/RecommendedVideos';
import VideoInfo from '../VideoInfo/VideoInfo';
import axios from 'axios';


const VideoPlayer = () => {
  let { videoId } = useParams();

  const [videoInfo, setVideoInfo] = useState([]);


  useEffect(() => {
    setVideoInfo([]);
    axios
      .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${videoId}&key=AIzaSyDCks-rtf-MeMgTeZBe87D5AajWGv3hXRI
          `)
      .then(response => {
        // console.log(response.data)
        createVideoInfo(response.data['items'][0]);
      })
      .catch(error => {
        // console.log(error);
      })
  }, [videoId])

  async function createVideoInfo(video) {
    const snippet = video.snippet;
    const stats = video.statistics;
    const channelId = snippet.channelId;
    const response = await axios
      .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics&id=${channelId}&key=AIzaSyDCks-rtf-MeMgTeZBe87D5AajWGv3hXRI`)

    const channelImage = response.data.items[0].snippet.thumbnails.medium.url;
    const subs = response.data.items[0].statistics.subscriberCount;
    const publishedDate = new Date(snippet.publishedAt).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    const title = snippet.title;
    const description = snippet.description;
    const channelTitle = snippet.channelTitle;
    const viewCount = stats.viewCount;
    const likeCount = stats.likeCount;
    const dislikeCount = stats.dislikeCount;

    setVideoInfo({
      title,
      description,
      publishedDate,
      channelTitle,
      channelImage,
      viewCount,
      likeCount,
      dislikeCount,
      subs
    });
  }

  return (
    <div className='videoplayer-main'>

      <div className='videoplayer'>
        <div className='videoplayer__videodetails'>
          <div className='videoplayer__video'>
            <Video videoId={videoId} />
          </div>
          <div className='videoplayer__videoinfo'>
            <VideoInfo
              title={videoInfo.title}
              description={videoInfo.description}
              publishedDate={videoInfo.publishedDate}
              channelTitle={videoInfo.channelTitle}
              channelImage={videoInfo.channelImage}
              viewCount={videoInfo.viewCount}
              likeCount={videoInfo.likeCount}
              dislikeCount={videoInfo.dislikeCount}
              subs={videoInfo.subs}
            />

          </div>
        </div>

      </div>
      <div className='videoplayer__suggested'>
        RecommendedVideos
      </div>

    </div>
  )
}

export default VideoPlayer;
