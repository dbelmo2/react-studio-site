import React, { useEffect } from 'react'
import VideoGallery from '../../VideoGallery';
import Footer from '../../Footer';
import { galleryData } from "./CinemaData";
import CinemaHero from '../../CinemaHero';



function Cinema() {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <CinemaHero></CinemaHero>
            <VideoGallery galleryData={galleryData}></VideoGallery>
            
            <Footer></Footer>
        </>
    )
}

export default Cinema
