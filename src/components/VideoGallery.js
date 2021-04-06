import React, { useEffect, useState } from 'react'
import "./VideoGallery.css";
import "aos/dist/aos.css";
import Aos from 'aos';
import { Link } from 'react-router-dom';

// takes in a list of gallery objects and renders them on screen




function VideoGallery({galleryData}) {


    const [descActive, setDescActive] = useState([]);
    const [mobileMode, setMobileMode] = useState(false);
    

 

    const handleVideoHover = (i) => () =>{
        
        console.log("hovering over video index: " + i);        
        let newArr = [...descActive]; // copying the old datas array
        newArr[i] = true;
        setDescActive(newArr); 
        onMute(i);
    }

    const handleVideoNoHover = (i) => () => {
        console.log("Not hovering over video index: " + i);
        let newArr = [...descActive]; // copying the old datas array
        newArr[i] = false;
        setDescActive(newArr); 
        offMute(i);
    }



    const checkResize = () => {
        if(window.innerWidth <=750) {
          setMobileMode(true);
          console.log("mobile mode set true");
        } else {
          setMobileMode(false);
          console.log("Mobile mode set false");
        }
      }
    
    const offMute = (id) => {
        var element = document.getElementById(id);
        element.muted = "muted";
    }
    const onMute = (id) => {
        var element = document.getElementById(id);
        element.muted = "";
    }
    
    useEffect(() => {
        checkResize();
        Aos.init({duration: 2000});
        for(var i=0; i<galleryData.length; i++) {
            setDescActive([...descActive, false]);
        }
    }, []);

    window.addEventListener('resize', checkResize);

    

    return (
        
            <div className="gallery--section">
                <div className="gallery--pane">

                {galleryData.map((item, idex) => (
                            <div data-aos={item.inverse ? "fade-up-left" : "fade-up-right"} className={item.inverse? "gallery--item-wrapper-inverse":"gallery--item-wrapper"} style={{display: 'flex', flexDirection: mobileMode ? ('column'): (item.inverse ? 'row-reverse': 'row') }}>
                                <div onMouseEnter={handleVideoHover(idex)} className={item.inverse ? "gallery--video-container-inverse": "gallery--video-container"}  onMouseLeave={handleVideoNoHover(idex)}>

                                    <div className="gallery--video-background">
                                        <video id={idex} className='gallery--video-style' autoPlay loop muted>
                                            <source src={item.src} type='video/mp4' />
                                        </video>
                                    </div>

                                    <div className="gallery--video-content">
                                        {(descActive[idex] || mobileMode ? (item.hasLink ? <a className="link" href={item.link}> {item.label} </a> : null) : (null))}
                                    </div>
                                </div>
                                <div className={ mobileMode? ("gallery--desc-container") : (descActive[idex]? (item.inverse ? "gallery--desc-container-active-inverse" : "gallery--desc-container-active") : (item.inverse ? "gallery--desc-container-inverse": "gallery--desc-container"))}>
                                    <div className="gallery--header-wrapper">
                                        <h1 className="gallery--header">{item.title}</h1>
                                    </div>
                                    <div className="gallery--desc-wrapper">
                                        <p className="gallery--desc">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        
                        ))}

                </div>
            </div>

        
    )
}

export default VideoGallery
