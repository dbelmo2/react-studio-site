import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {

    const [mobile, setMobile] = useState(false);

    const showButton = () => {
        if(window.innerWidth <=960) {
          setMobile(true);
        } else {
          setMobile(false);
        }
      }

    useEffect(() => {
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton);



    return (
        <div className="video--container">

            <div className="video--background">
                <video className='video--style' autoPlay loop muted>
                    <source src={'./videos/Showreel2020.mp4'} type='video/mp4' />
                </video>
            </div>
            
            <div className="video--content">
                <img className="video--logo" src="./images/krezzy-logo.png" alt="krezzyy logo"/>
                <h1 className="video-header-1">Krezzyy Studios</h1>
                
                <h2 className="video-header-2">Any reason to celebrate</h2>


                <Button buttonStyle='btn--outline video' buttonSize="btn--medium"> EXPLORE </Button>
            
            </div>
        </div>
    )
}

export default HeroSection
