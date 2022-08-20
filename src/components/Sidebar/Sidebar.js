import React from 'react';
import { Link } from "react-router-dom";

import Sidebarelement from "../Sidebarelement/Sidebarelement.js";
import Button from '@mui/material/Button';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsRounded';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsRounded';
import TheatersOutlinedIcon from '@mui/icons-material/TheatersRounded';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperRounded';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsRounded';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomRounded';
import LightbulbCircleOutlinedIcon from '@mui/icons-material/LightbulbCircleRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import VrpanoSharpIcon from '@mui/icons-material/VrpanoSharp';
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      <Link to="/">
        <Sidebarelement img={<HomeIcon />} text="Home" />
      </Link>

      <Sidebarelement img={<ExploreOutlinedIcon />} text="Explore" />
      <Sidebarelement img={<PlayCircleOutlinedIcon />} text="Shorts" />
      <Sidebarelement img={<SubscriptionsOutlinedIcon />} text="Subscription" />
      <hr></hr>
      <Sidebarelement img={<VideoLibraryOutlinedIcon />} text="Library" />
      <Sidebarelement img={<RestoreOutlinedIcon />} text="History" />
      <hr></hr>
      <div className="sign-text">
        <div >
          Sign in to like videos, comment, and subscribe.
        </div>
        <Button variant="outlined"><AccountCircleOutlinedIcon />SIGN IN</Button>

      </div>
      <hr></hr>
      <div className="explore">
        <h3>Explore</h3>
        <Sidebarelement img={<VideoLibraryOutlinedIcon />} text="Music" />
        <Sidebarelement img={<EmojiEventsOutlinedIcon />} text="Sports" />

        <Sidebarelement img={<SportsEsportsOutlinedIcon />} text="Gaming" />
        <Sidebarelement img={<TheatersOutlinedIcon />} text="Movies" />

        <Sidebarelement img={<NewspaperOutlinedIcon />} text="News" />
        <Sidebarelement img={<SensorsOutlinedIcon />} text="Live" />


        <Sidebarelement img={<CheckroomOutlinedIcon />} text="Fashion & Beauty" />
        <Sidebarelement img={<LightbulbCircleOutlinedIcon />} text="Learning" />

        <Sidebarelement img={<YouTubeIcon />} text="Spotlight" />
        <Sidebarelement img={<VrpanoSharpIcon />} text="360° Video" />

      </div>
    </div>
  )
}
