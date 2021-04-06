import React, { useState } from 'react'
import { Button } from './Button'
import "./ViewMore.css";
import {FaVimeo } from 'react-icons/fa'

function ViewMore() {
    const VIMEO_PATH = "https://vimeo.com/krezzyystudios";
    const [hover, setHover] = useState(false);
    const handleHover = () => setHover(true);
    const handleNoHover = () => setHover(false);

    return (
        <div className="ViewMore--container">
            <div className="ViewMore--wrapper">
                <a style={{textDecoration: 'none'}} href={VIMEO_PATH}>
                <div className="ViewMore--button" onMouseEnter={handleHover} onMouseLeave={handleNoHover}>
                    <h2 className={hover ? "ViewMore--title-active" : "ViewMore--title"}>View more on Vimeo</h2>
                    <FaVimeo className={hover ? "ViewMore--icon-active" : "ViewMore--icon" } size={50}/>
                </div>
                </a>
            </div>
            
        </div>
    )
}

export default ViewMore
