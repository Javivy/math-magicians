/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Math Magicians</h1>
      <div className='navbar-links'>
        <Link to='/' className='link-item'>Home</Link>
        <Link to='/calculator' className='link-item'>Calculator</Link>
        <Link to='/quotes' className='link-item'>Quotes</Link>
      </div>
    </div>
  );
};

export default Navbar;