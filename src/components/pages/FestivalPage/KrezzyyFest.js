import React, { useEffect } from 'react'
import BasicHero from '../../BasicHero';
import Footer from "../../Footer";
import VideoGallery from '../../VideoGallery';
import ImageCarousel from '../../ImageCarousel'


import { heroOneData, heroTwoData, heroThreeData, heroFourData } from "./KrezzyyFestData";
import { photos2020, video2020 } from "./KrezzyyFestData";
function KrezzyyFest() {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);


    return (
        <>
          <BasicHero {...heroOneData}/>
          <BasicHero {...heroTwoData}/>
          <BasicHero {...heroThreeData}/>
          <BasicHero {...heroFourData}/>

          <ImageCarousel header="2020" slides={photos2020}></ImageCarousel>
          <VideoGallery galleryData={video2020}></VideoGallery>


          <Footer></Footer>  
        </>
    )
}

export default KrezzyyFest
