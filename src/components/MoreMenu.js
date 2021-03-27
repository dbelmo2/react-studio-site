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
                <div className='MoreMenu-item'>
                    <Link to='/' className='MoreMenu-link'> Cinema </Link>
                </div>
                <div className='MoreMenu-item'>
                    <Link to='/' className='MoreMenu-link'> Videography </Link>

                </div>
                <div className='MoreMenu-item'>
                    <Link to='/' className='MoreMenu-link'> Photography </Link>
                </div>
                <div className='MoreMenu-item'>
                    <Link to='/' className='MoreMenu-link'> Krezzyy Fest </Link>
                </div>
                <div className='MoreMenu-item'>
                    <Link to='/' className='MoreMenu-link'> Black Lives Matter </Link>
                </div>
                <div className='MoreMenu-item'>
                    <Link to='/' className='MoreMenu-link'> Contact </Link>
                </div>
                <div className='MoreMenu-item'>
                    <Link to='/' className='MoreMenu-link'> Krezzyy VFX SFX </Link>
                </div>
            </div>   
        </>
    )
}


