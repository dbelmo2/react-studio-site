import React, { useEffect } from 'react'
import AboutHero from '../../AboutHero'
import Footer from '../../Footer';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <AboutHero></AboutHero>
        <Footer></Footer>
        </>
    )
}

export default About
