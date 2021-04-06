import React, { useEffect, useState } from 'react'
import "./WelcomeSection.css";
import { welcomeInfo } from "./pages/HomePage/HomeData.js";
import { FaCalendarAlt, FaFilm, FaCamera, FaStar } from 'react-icons/fa'
import "aos/dist/aos.css";
import Aos from 'aos';
import { Link } from 'react-router-dom';






function WelcomeSection() {
    
    const [videoHover, setVideoHover] = useState(false);
    const [photoHover, setPhotoHover] = useState(false);
    const [eventHover, setEventHover] = useState(false);
    const [fxHover, setFxHover] = useState(false);

    

    const handleVideoHover = () => setVideoHover(true);
    const handleVideoNoHover = () => setVideoHover(false);

    const handlePhotoHover = () => setPhotoHover(true);
    const handlePhotoNoHover = () => setPhotoHover(false);
    
    const handleEventHover = () => setEventHover(true);
    const handleEventNoHover = () => setEventHover(false);

    const handleFxHover = () => setFxHover(true);
    const handleFxNoHover = () => setFxHover(false);
    
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);





    


    return (
        <div className="welcome--container">
            <div data-aos="fade-down" className="welcome--pane">
                <div data-aos="fade-up" className="welcome--logo-container">
                        <img src=".././images/white-blue-logo.png" alt="krezzy-logo" className="welcome--logo"/>
                </div>
                <div data-aos="fade-down" className="welcome--info-container">

                    <div className="welcome--header-container-top">
                        <h1 className="welcome--header-top"> {welcomeInfo.title1}</h1>
                    </div>
                    
                    <div className="welcome--header-container-bottom">
                        <h1 className="welcome--header-bottom"> {welcomeInfo.title2}</h1>
                    </div>
                    <p className="welcome--info"> 
                        {welcomeInfo.body}
                    </p>
                    <p className="welcome--info"> 
                        {welcomeInfo.body2}
                    </p>
                    <p className="welcome--info"> 
                        {welcomeInfo.body3}
                    </p>
            </div>
            </div>
            <div className="services-section">

                <div data-aos="fade-up" className="services-section-pane">
                    <div data-aos="fade-right" className="services-header-wrapper">
                        <h4 className="services-header-top">Explore our . . .</h4>
                        <h1 className="services-header-bottom">Services</h1>
                        <p className="services-body"> Krezzyy studios has always been about more than just films. We believe in empowering all forms of art, and have continued to do so since we were founded.</p>
                    </div>

                    


                    <div data-aos="fade-left" className="services-buttons-pane">

                        <div classname="services-buttons-pillar">   

                            <Link className="welcome--link-style" to="/Videography">
                            <div className="services-button-wrapper">

                                <div className="services-button-container" onMouseEnter={handleVideoHover} onMouseLeave={handleVideoNoHover}>
                                        {videoHover ? (  
                                                <video className='video-button-style' autoPlay loop muted>
                                                    <source src={'./videos/Showreel2020.mp4'} type='video/mp4' />
                                                </video>
                                            
                                        ) : 
                                        <FaFilm className="welcome--icon" size="35"> </FaFilm>
                                        }
                                </div>

                                <div className="button-label">Videography</div>  
                                
                                
                            </div>
                            </Link>

                            
                            <Link className="welcome--link-style" to="/Photography">
                            <div className="services-button-wrapper">

                                <div className="services-button-container" onMouseEnter={handlePhotoHover} onMouseLeave={handlePhotoNoHover}>
                                    {photoHover ? (    
                                                
                                        <video className='video-button-style' autoPlay loop muted>
                                            <source src={'./videos/photo-video.mp4'} type='video/mp4' />
                                        </video>
                                    ) : 
                                        <FaCamera className="welcome--icon" size="35"> </FaCamera>
                                    }
                                </div>
                                <div className="button-label">Photography</div>
                            </div>
                            </Link>

                        </div>

                        <div classname="services-buttons-pillar">
                            
                            <Link className="welcome--link-style" to="/KrezzyyFest" >
                            <div className="services-button-wrapper">

                                <div className="services-button-container" onMouseEnter={handleEventHover} onMouseLeave={handleEventNoHover}>
                                    {eventHover ? (    
                                                
                                        <video className='video-button-style' autoPlay loop muted>
                                            <source src={'./videos/events-video.mp4'} type='video/mp4' />
                                        </video>
                                    ) : 
                                        <FaCalendarAlt  className={"welcome--icon"} size="35"> </FaCalendarAlt>
                                    }
                                </div>
                                <div className="button-label" >Krezzyy Fest</div>

                            </div>
                            </Link>
                            
                            <Link className="welcome--link-style" to="/SFXVFX">
                            <div className="services-button-wrapper">

                                <div className="services-button-container" onMouseEnter={handleFxHover} onMouseLeave={handleFxNoHover}>
                                    {fxHover ? (    
                                                
                                        <video className='video-button-style' autoPlay loop muted>
                                            <source src={'./videos/dragon-video.mp4'} type='video/mp4' />
                                        </video>
                                    ) : 
                                        <FaStar className="welcome--icon" size="35"> </FaStar>
                                    }
                                </div>
                                <div className="button-label" >SFX VFX</div>

                            </div>
                            </Link>




                        </div>
                    </div>

                </div>

            </div>




        </div>
    )
}

export default WelcomeSection
