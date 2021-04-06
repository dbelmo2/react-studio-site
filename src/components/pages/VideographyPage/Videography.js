import React, { useEffect } from 'react'
import VideoGallery from '../../VideoGallery';
import Footer from '../../Footer';
import {videoData} from "./VideographyData";
import VideographyHero from '../../VideographyHero';
import ViewMore from '../../ViewMore';

function Videography() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>

          <VideographyHero ></VideographyHero>
          <VideoGallery galleryData={videoData}></VideoGallery>
          <ViewMore/>
          <Footer></Footer>  
        </>
    )
}

export default Videography
