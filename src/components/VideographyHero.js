import React from 'react'
import "./VideographyHero.css";
function VideographyHero() {
    return (
        <div className="VideographyHero--container">
        <div className="VideographyVideographyHero--wrapper">
            <div className= "VideographyHero--content-wrapper">
                <div className="VideographyHero--desc-wrapper">
                    <div className="VideographyHero--header-wrapper-top"> 
                        <h2> You name it,</h2>
                    </div>
                    <div className="VideographyHero--header-wrapper-bottom">
                        <h1 className="VideographyHero--header">We'll film it</h1>
                    </div>
                    <div className="VideographyHero--body-wrapper">
                        <h3 className="VideographyHero--body"> Our Videography services are available for almost any event. These are just a few of the places our work has been featured. Explore more below!</h3>
                    </div>

                </div>
                <div className="VideographyHero--partners-wrapper">
                    <div className="VideographyHero--partners-bar">
                        <img className={"VideographyHero--image-style"} alt="partner-logo" src=".././images/VideographyImages/netflix-logo.png"/>
                        <img className={"VideographyHero--image-style"} alt="partner-logo" src=".././images/VideographyImages/gma-logo.png"/>
                        <img className={"VideographyHero--image-style"} alt="partner-logo" src=".././images/VideographyImages/today-logo.png"/>

                    </div>
                    <div className="VideographyHero--partners-bar">
                        <img className={"VideographyHero--image-style"} alt="partner-logo" src=".././images/VideographyImages/popsugar-logo.png"/>
                        <img className={"VideographyHero--image-style"} alt="partner-logo" src=".././images/VideographyImages/cbs-logo.png"/>
                        <img className={"VideographyHero--image-style"} alt="partner-logo" src=".././images/VideographyImages/brides-logo.png"/>

                    </div>

                </div>

            </div>
        </div>    
    </div>
    )
}

export default VideographyHero
