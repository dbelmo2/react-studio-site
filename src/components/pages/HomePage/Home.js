import React, { useEffect, useState } from 'react';
import { Button } from '../../Button';
import HeroSection from '../../HeroSection';
import WelcomeSection from '../../WelcomeSection';
import './Home.css';


function Home() {

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
        <>
            <HeroSection></HeroSection>
            <WelcomeSection></WelcomeSection>
        </>
    )
}

export default Home
