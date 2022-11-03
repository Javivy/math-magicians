/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faXmark);

const Navbar = () => {
  const openMenu = () => {
    const mobileMenu = document.querySelector('.navbar-links-mobile');
    mobileMenu.classList.add('visible');
    mobileMenu.style.animation = 'fadeIn forwards 0.4s ease-in-out';
  };

  const closeMenu = () => {
    const mobileMenu = document.querySelector('.navbar-links-mobile');
    mobileMenu.style.animation = 'fadeOut forwards 0.4s ease-in-out';
    setTimeout(() => {
      mobileMenu.classList.remove('visible');
    }, 400);
  };

  return (
    <div className='navbar'>
      <h1>Math Magicians</h1>
      <div className='navbar-links-desktop'>
        <Link to='/' className='link-item'>Home</Link>
        <Link to='/calculator' className='link-item'>Calculator</Link>
        <Link to='/quotes' className='link-item'>Quotes</Link>
      </div>
      <div className='navbar-mobile'>
        <FontAwesomeIcon icon={faBars} className='bars-icon' onClick={openMenu}/>
        <ul className='navbar-links-mobile'>
          <FontAwesomeIcon icon={faXmark} className='close-icon' onClick={closeMenu}/>
          <li>
            <Link to='/' className='link-item' onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to='/calculator' className='link-item' onClick={closeMenu}>Calculator</Link>
          </li>
          <li>
            <Link to='/quotes' className='link-item' onClick={closeMenu}>Quotes</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;