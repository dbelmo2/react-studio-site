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
      console.log("button set to false");
    } else {
      console.log("button set to true");
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
            <Link to='/HowItWorks' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>

          <li className='nav-item'>
            { button ? (
                  <>

                    <Link onMouseEnter={handleMoreHover} onMouseLeave={handleMoreHoverStop} to='/Download' className='nav-links' >
                      More
                    </Link>
                    {moreHover || MoreMenuHover ? <MoreMenu {...menuProps}></MoreMenu> : (null)}

                  </>
                        ) : 
            (
              <>
              <Link to='/Download' className='nav-links' onClick={closeMobileMenu}>
                Cinema 
              </Link>
              <Link to='/Download' className='nav-links' onClick={closeMobileMenu}>
                Videography 
              </Link>
              <Link to='/Download' className='nav-links' onClick={closeMobileMenu}>
                Photography 
              </Link>
              <Link to='/Download' className='nav-links' onClick={closeMobileMenu}>
                Krezzyy Fest 
              </Link>
              <Link to='/Download' className='nav-links' onClick={closeMobileMenu}>
                Black Lives Matter 
              </Link>
              <Link to='/Download' className='nav-links' onClick={closeMobileMenu}>
                Krezzyy VFX SFX 
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
    width: 46,
    height: 38,
    marginRight: 10
  }

}


export default Navbar
