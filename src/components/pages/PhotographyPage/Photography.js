import React, { useEffect } from 'react'
import Footer from '../../Footer'
import ImageCarousel from '../../ImageCarousel'
import PhotographyHero from '../../PhotographyHero';
import { portraitPhotos, weddingPhotos } from "./PhotographyPageData";

function Photography() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <> 
           <PhotographyHero></PhotographyHero>
           <ImageCarousel header="Portraits" slides={portraitPhotos}></ImageCarousel>
           <ImageCarousel header="Weddings" slides={weddingPhotos}></ImageCarousel>
           <Footer></Footer> 
        </>
    )
}

export default Photography
