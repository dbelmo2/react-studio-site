import React, { useEffect } from 'react'
import ContactHero from '../../ContactHero'
import Footer from '../../Footer'

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <ContactHero></ContactHero>
        <Footer></Footer>
        </>
    )
}

export default Contact
