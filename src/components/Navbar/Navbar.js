import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MicRoundedIcon from '@mui/icons-material/MicRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from "./youtube.png";
import Button from '@mui/material/Button';
import "./Navbar.css";
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <div className='nav-wrapper'>
            <Link to="/">

                <div className="nav-brand">
                    <img className="nav-brand-logo" src={logo} alt="" />
                    <div className="nav-brand-name">YourTube</div>
                </div>
            </Link>

            <div className="nav-search">
                <input type="text" placeholder='Search' className="search-box" />
                <Button variant="outlined"><SearchIcon /></Button>
                <Button ><MicRoundedIcon /></Button>

            </div>
            {/* 
            <div className="nav-mic">
            </div> */}

            <div className='signin-btn'>
                <Button variant="outlined"><AccountCircleOutlinedIcon />SIGN IN</Button>
            </div>



        </div>
    )
}
