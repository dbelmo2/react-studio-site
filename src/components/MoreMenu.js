import React from 'react'
import { Link } from 'react-router-dom';
import './MoreMenu.css';

export default function MoreMenu({
    mobileActive,
    onHoverEnter,
    onHoverExit,
}) {
    return (
        <>
            <div className={mobileActive ? 'MoreMenu-mobile' : 'MoreMenu'} onMouseEnter={onHoverEnter} onMouseLeave={onHoverExit}>
                <Link to='/Cinema' className='MoreMenu-link'> 
                    <div className='MoreMenu-item'>
                        Cinema 
                    </div>
                </Link>
                <Link to='/Videography' className='MoreMenu-link'> 
                    <div className='MoreMenu-item'>
                        Videography 
                    </div>
                </Link>
                <Link to='/Photography' className='MoreMenu-link'> 
                    <div className='MoreMenu-item'>
                        Photography 
                    </div>
                </Link>
                <Link to='/KrezzyyFest' className='MoreMenu-link'> 
                    <div className='MoreMenu-item'>
                        Krezzyy Fest 
                    </div>
                </Link>
                <Link to='/Sfxvfx' className='MoreMenu-link'> 
                    <div className='MoreMenu-item'>
                        SFX/VFX 
                    </div>
                </Link>
                <Link to='/Contact' className='MoreMenu-link'> 
                    <div className='MoreMenu-item'>
                        Contact Us
                    </div>
                </Link>

            </div>   
        </>
    )
}


