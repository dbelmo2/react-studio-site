import React from 'react'
import "./AboutHero.css";
import { profileOneData, profileTwoData, profileThreeData } from "./pages/AboutPage/AboutData";

function AboutCinemaHero() {
    return (
        <div className="CinemaHero--container">
            <div className="CinemaHero--wrapper">
                <div className="CinemaHero--title-wrapper">
                    <div className="CinemaHero--title-top-wrapper">
                        <h3>Meet</h3>
                    </div>
                    <div className="CinemaHero--title-bottom-wrapper">
                    <h1 style={{fontSize: 50}}>The Team</h1>
                    </div>
                </div>

                <div className="CinemaHero--photos-pane">
                    <a style={{textDecoration: 'none'}} href={profileOneData.link}>
                    <div  className="CinemaHero--profile-container">
                        <div className="CinemaHero--profile-wrapper"> 

                            <div className="CinemaHero--photo-container">
                                <img className= "CinemaHero--img-style" src={profileOneData.img} alt="profile-image"/>
                            </div>
                            <div className="CinemaHero--desc-wrapper">
                                <div className="CinemaHero--desc-header-container"> 
                                    <a className="CinemaHero--profile-header" href={profileOneData.link}>{profileOneData.name}</a>
                                </div>
                                <div className="CinemaHero--desc-body-container">
                                    <p className="CinemaHero--profile-desc">{profileOneData.desc}</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    </a>

                    <a style={{textDecoration: 'none'}} href={profileTwoData.link}>
                        <div className="CinemaHero--profile-container">
                            <div className="CinemaHero--profile-wrapper"> 

                                <div className="CinemaHero--photo-container">
                                    <img className= "CinemaHero--img-style" src={profileTwoData.img } alt="profile-image"/>
                                </div>
                                <div className="CinemaHero--desc-wrapper">
                                    <div className="CinemaHero--desc-header-container"> 
                                        <a className="CinemaHero--profile-header" href={profileTwoData.link}>{profileTwoData.name}</a>
                                    </div>
                                    <div className="CinemaHero--desc-body-container">
                                        <p className="CinemaHero--profile-desc">{profileTwoData.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a style={{textDecoration: 'none'}} href={profileThreeData.link}>

                        <div className="CinemaHero--profile-container">
                            <div className="CinemaHero--profile-wrapper"> 

                                <div className="CinemaHero--photo-container">
                                    <img className= "CinemaHero--img-style" src={profileThreeData.img} alt="profile-image"/>
                                </div>
                                <div className="CinemaHero--desc-wrapper">
                                    <div className="CinemaHero--desc-header-container"> 
                                        <a className="CinemaHero--profile-header" href={profileThreeData.link} >{profileThreeData.name}</a>
                                    </div>
                                    <div className="CinemaHero--desc-body-container">
                                        <p className="CinemaHero--profile-desc">{profileThreeData.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default AboutCinemaHero
