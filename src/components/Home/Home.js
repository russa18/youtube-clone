import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Home.css";
import Videocard from '../Videocard/Videocard';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';

export default function Home() {


  const [videoCards, setVideoCards] = useState([]);
  // const [video, setVideo] = useState([]);


  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=AIzaSyDCks-rtf-MeMgTeZBe87D5AajWGv3hXRI`)
      .then(response => {
        // console.log(response.data.items);

        createVideoCards(response.data.items);

      })
      .catch(error => {
        console.log(error);
      })
  }, [])


  async function createVideoCards(videoItems) {
    let newVideoCards = [];
    for (const video of videoItems) {
      const videoId = video.id;
      const snippet = video.snippet;
      const channelId = snippet.channelId;
      const response = await axios
        .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyDCks-rtf-MeMgTeZBe87D5AajWGv3hXRI`)
      const channelImage = response.data.items[0].snippet.thumbnails.medium.url;

      const title = snippet.title;
      const image = snippet.thumbnails.medium.url;
      const views = video.statistics.viewCount;
      const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
      const channel = snippet.channelTitle;

      newVideoCards.push({
        videoId,
        image,
        title,
        channel,
        views,
        timestamp,
        channelImage
      });
    };
    setVideoCards(newVideoCards);
  }



  return (
    <div className="home-wrapper">
      {
        videoCards.map(item => {
          return (
            <Link key={item.videoId} to={`/video/${item.videoId}`}>

              <Videocard
                title={item.title}
                image={item.image}
                views={item.views}
                timestamp={item.timestamp}
                channel={item.channel}
                channelImage={item.channelImage}
              />
            </Link>
          )
        })
      }


    </div>
  )
}
