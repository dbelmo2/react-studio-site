import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button';
import './Navbar.css'
import { IconContext } from 'react-icons/lib';
import MoreMenu from './MoreMenu';

function Navbar() {


  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  const [moreHover, setMoreHover] = useState(false);
  const [MoreMenuHover, setMoreMenuHover] = useState(false);
  
  const handleMenuClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <=960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  const handleMoreHover = () => {
    setMoreHover(true);
  }

  const handleMoreHoverStop = () => {
    setMoreHover(false);
  }

  const menuHoverEnterCallback = () => setMoreMenuHover(true);
  const menuHoverExitCallback = () => setMoreMenuHover(false); // <- set to false


  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  
  let menuProps = {
    mobileActive: !button,
    onHoverEnter: menuHoverEnterCallback,
    onHoverExit: menuHoverExitCallback
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
    <div className="navbar">
      <div className="navbar-container container">
        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
          
          <img alt='' src="images/krezzy-logo-darkbg.png" style={styles.bannerLogo}/>
          Krezzyy Studios
        </Link>

        <div className="menu-icon" onClick={handleMenuClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>

          <li className='nav-item-more'>
            { button ? (
                  <>

                    <p onMouseEnter={handleMoreHover} onMouseLeave={handleMoreHoverStop}  className='nav-links' >
                      More
                    </p>
                    {moreHover || MoreMenuHover ? <MoreMenu {...menuProps}></MoreMenu> : (null)}

                  </>
                        ) : 
            (
              <>
              <Link to='/Cinema' className='nav-links' onClick={closeMobileMenu}>
                Cinema 
              </Link>
              <Link to='/Videography' className='nav-links' onClick={closeMobileMenu}>
                Videography 
              </Link>
              <Link to='/Photography' className='nav-links' onClick={closeMobileMenu}>
                Photography 
              </Link>
              <Link to='/KrezzyyFest' className='nav-links' onClick={closeMobileMenu}>
                Krezzyy Fest 
              </Link>
              <Link to='/Sfxvfx' className='nav-links' onClick={closeMobileMenu}>
                SFX/VFX
              </Link>
              <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                Contact Us
              </Link>       

              </>            
              
            )
            }
          </li>



        </ul>


        

      </div>
    </div>
    </IconContext.Provider>
    </>
  )
}

const styles = {
  bannerLogo:{
    width: 55,
    height: 50,
    marginRight: 10
  }

}


export default Navbar
