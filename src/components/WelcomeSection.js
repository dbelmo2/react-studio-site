import React from 'react'
import "./WelcomeSection.css";
import { welcomeInfo } from "./WelcomeData";

function WelcomeSection() {
    return (
        <div className="welcome--container">
            <div className="welcome--pane">
                <div className="welcome--logo-container">
                        <img src=".././images/krezzy-logo-darkbg.png" alt="krezzy-logo" className="welcome--logo"/>
                </div>
                <div className="welcome--info-container">

                    <div className="welcome--header-container">
                        <h1 className="welcome--header"> {welcomeInfo.title}</h1>
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
        </div>
    )
}

export default WelcomeSection
