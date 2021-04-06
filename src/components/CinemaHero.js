import React, { useEffect, useState } from 'react'
import "./CinemaHero.css";
import { ImageData } from "./pages/CinemaPage/CinemaData";

function CinemaHero() {
    const [displayImage, setDisplayImage] = useState(false);
    const [mobileMode, setMobileMode] = useState(false);
    const [displaySrc, setDisplaySrc] = useState("");


    const handleImageClick = (item) => () => {
        setDisplaySrc(item);
        setDisplayImage(true);
        
    }

    const handleImageExitClick = () => {
        setDisplayImage(false);
    }

    const checkResize = () => {
        if(window.innerWidth <=512) {
          setMobileMode(true);
          console.log("mobile mode set true");
        } else {
          setMobileMode(false);
          console.log("Mobile mode set false");
        }
      }
    

    
    useEffect(() => {
        checkResize();
    }, []);

    window.addEventListener('resize', checkResize);


    return (
        <div className="hero--container">
            <div className="hero--wrapper">
                <div className= "hero--content-wrapper">
                    <div className="hero--desc-wrapper">
                        <div className="hero--header-wrapper-top"> 
                            <h2> Lights, Camera,</h2>
                        </div>
                        <div className="hero--header-wrapper-bottom">
                            <h1 className="hero--header">Action!</h1>
                        </div>
                        <div className="hero--body-wrapper">
                            <h3 className="hero--body">Krezzyy Studios has and continues to produce high quality cinematic films. Explore some of our work below!</h3>
                        </div>

                    </div>
                    <div className="hero--gallery-wrapper">
                        {displayImage && mobileMode ?(
                            <img onClick={handleImageExitClick} className="image-fullscreen" alt="image" src={displaySrc}></img>
                        ) : 
                        (<table>
                            {
                                ImageData.map((row, index)=> (
                                    <tr key={row[0]}>
                                        {row.map((item, index) => <th key={index}>
                                            <div className="table-float">
                                                <img onClick={handleImageClick(item)} className="hero--gallery-table-img" src={item} alt="table-image"></img>
                                            </div>
                                        </th>)}

                                    </tr>
                                )) 
                            }

                        </table>)}

                    </div>

                </div>
            </div>    
        </div>
    )
}

export default CinemaHero
