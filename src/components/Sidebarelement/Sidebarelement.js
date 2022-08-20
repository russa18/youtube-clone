import React from 'react';
import "./Sidebarelement.css";

export default function Sidebarelement({ img, text }) {
    return (
        <div className='sidebarelement'>
            <div className='sidebarelement-img'>
                {img}
            </div>
            <div className='sidebarelement-text'>
                {text}
            </div>
        </div>
    )
}
