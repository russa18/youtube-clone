
import React from 'react';

import './VideoInfo.css';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import Button from '@mui/material/Button';

const VideoInfo = ({ title, description, publishedDate, channelTitle, channelImage, viewCount, likeCount, dislikeCount, subs }) => {

    return (
        <div className='videoinfo'>
            <div className='videoinfo__headline'>
                <h4 style={{ margin: "0px" }}>{title}</h4>
            </div>
            <div className='videoinfo__stats'>
                <p>{viewCount} views • {publishedDate}</p>
                <div className="videoinfo__likes">
                    <div className="videoinfo__sec">
                        <div className="videoinfo__icon">
                            <ThumbUpOffAltOutlinedIcon />
                        </div>
                        <div>
                            {likeCount}
                        </div>
                    </div>
                    <div className="videoinfo__sec">
                        <div className="videoinfo__icon">
                            <ThumbDownAltOutlinedIcon />
                        </div>

                        <div>
                            {dislikeCount} DISLIKE
                        </div>
                    </div>
                    <div className="videoinfo__sec">
                        <div className="videoinfo__icon">
                            <ReplyOutlinedIcon />
                        </div>SHARE</div>
                    <div className="videoinfo__sec">
                        <div className="videoinfo__icon">
                            <PlaylistAddOutlinedIcon />
                        </div>SAVE</div>

                    {/* <SideBarRow Icon={ReplyIcon} title='SHARE' />
                    <SideBarRow Icon={PlaylistAddIcon} title='SAVE' />
                    <SideBarRow Icon={MoreHorizIcon} title='' /> */}
                </div>
            </div>
            <hr />
            <div className="videoinfo__channel">
                <div className='channel-img'>
                    <div>


                        <img
                            className='videoinfo__avatar'
                            alt={channelTitle}
                            src={channelImage}
                        />
                    </div>
                    <div className='videoinfo__channelinfo'>
                        <h3 className='videoinfo__channeltitle'>{channelTitle}</h3>
                        <p className='videoinfo__channelsubs'>{subs} subscribers</p>

                    </div>

                </div>
                <div className='videoinfo__subscribe'>
                    <Button variant="contained" style={{

                        backgroundColor: "red",
                        padding: "5px",
                        fontSize: "15px",
                        fontWeight: "800",
                        width: "110px"
                    }}
                    >SUBSCRIBE</Button>

                </div>
            </div>
            {/* <div className='videoinfo__channeldesc'>
                <p>{description}</p>
            </div> */}
        </div>
    )
}

export default VideoInfo;