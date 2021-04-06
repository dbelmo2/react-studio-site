import React, { useEffect, useState } from 'react'
import "./BasicHero.css";

function BasicHero({
    inverse,
    image,
    headerTop,
    headerBottom,
    body,
    isTop

     }) {

        const [mobile, setMobile] = useState(false);

        const checkResize = () => {
            if(window.innerWidth <=750) {
              setMobile(true);
              console.log("mobile mode set true");
            } else {
              setMobile(false);
              console.log("Mobile mode set false");
            }
          }

        useEffect(() => {
            checkResize();
        }, []);
    
        window.addEventListener('resize', checkResize);
    


    return (
        <div className="BasicHero--container">
            <div className="BasicHero--wrapper" style={{flexDirection: mobile ? 'column-reverse': (inverse ? 'row-reverse': 'row')}}>
                <div className="BasicHero--text-container">
                    <div className="BasicHero--header-top-wrapper">
                        <h3 style={{color: !inverse ? '#1967FF' : '#fff'}} className="BasicHero--header-top">{headerTop}</h3>
                    </div>
                    <div className="BasicHero--header-bottom-wrapper">
                        <h3 style={{color: inverse ? '#1967FF' : '#fff'}} className="BasicHero--header-bottom">{headerBottom}</h3>
                    </div>
                    <div className="BasicHero--body-wrapper">
                        <p className="BasicHero--body"> {body} 
                        </p>
                    </div>
                    
                </div>
                <div className="BasicHero--image-container">
                    <img className={isTop ? "BasicHero--logo-style" : "BasicHero--image-style"} src={image}></img>
                </div>


            </div>
            
        </div>
    )
}

export default BasicHero
