import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaSoundcloud, FaTwitter, FaVimeo, FaYoutube } from 'react-icons/fa'







function Footer({
    inHomePage
}) {



    const TWITTER_PATH = "https://twitter.com/krezzyystudios";
    const INSTA_PATH = "https://www.instagram.com/krezzyystudios/";
    const LINKEDIN_PATH = "https://www.linkedin.com/in/johnny-fentry-jr-a0a2b112b/"
    const VIMEO_PATH = "https://vimeo.com/krezzyystudios";
    const SOUNDCLOUD_PATH = "https://soundcloud.com/kamojayy";
    const YOUTUBE_PATH = "https://www.youtube.com/channel/UCuRfYaJIFX_hcXELXoShcYQ";
    const FACEBOOK_PATH = "https://www.facebook.com/krezzyyTv/";
    return (
        <div className="footer__container">

            <div className="footer__links">
                    <div className="footer__link-items">
                        <h3>About Us</h3>
                            <Link to='/About'> Community</Link>

                    </div>
                    <div className="footer__link-items">
                        <h3>Contact Us</h3>
                            <Link to='/Contact'> Email</Link>
                            <a className="footer-link" href={LINKEDIN_PATH}> LinkedIn</a>
                    </div>
                    <div className="footer__link-items">
                        <h3>Social Media</h3>
                            <a className="footer-link" href={INSTA_PATH}> Instagram</a>
                            <a className="footer-link" href={TWITTER_PATH}> Twitter</a>
                            <a className="footer-link" href={TWITTER_PATH}> Youtube</a>
                            <a className="footer-link" href={FACEBOOK_PATH}> Facebook</a>
                            <a className="footer-link" href={LINKEDIN_PATH}> LinkedIn</a>
                            <a className="footer-link" href={SOUNDCLOUD_PATH}> Soundcloud</a>
                            <a className="footer-link" href={VIMEO_PATH}> Vimeo</a>
                            




                    </div>

            </div>




            <div className="footer__bottom-bar">
                <div className="footer__copyright-text-wrapper">

                    <p className="footer__copright-text">Copyright © 2021 Krezzyy Studios</p>
                </div>



                <div className="footer__icon-bar-wrapper">
                    <a className="footer-link" href={TWITTER_PATH}>
                        <div className="footer__social-icon">
                            <FaTwitter  className="icon-style" size={25}/>
                        </div>
                    </a>
                    <a className="footer-link" href={INSTA_PATH}>
                        <div className="footer__social-icon">
                            <FaInstagram className="icon-style" size={25} />
                        </div>
                    </a>
                    <a className="footer-link" href={FACEBOOK_PATH}>
                        <div className="footer__social-icon">
                            <FaFacebook className="icon-style" size={25} />
                        </div>
                    </a>
                    <a className="footer-link" href={INSTA_PATH}>
                        <div className="footer__social-icon">
                            <FaLinkedin className="icon-style" size={25} />
                        </div>
                    </a>
                    <a className="footer-link" href={YOUTUBE_PATH}>
                        <div className="footer__social-icon">
                            <FaYoutube className="icon-style" size={25} />
                        </div>
                    </a>
                    <a className="footer-link" href={SOUNDCLOUD_PATH}>
                        <div className="footer__social-icon">
                            <FaSoundcloud className="icon-style" size={25} />
                        </div>
                    </a>
                    <a className="footer-link" href={VIMEO_PATH}>
                        <div className="footer__social-icon">
                            <FaVimeo className="icon-style" size={25} />
                        </div>
                    </a>
                    <Link to="/Contact" >
                        <div className="footer__social-icon">
                            <FaEnvelope className="icon-style" size={25} />
                        </div>
                    </Link>
                </div> 

                
            </div>
        </div>
    )
}

export default Footer
