import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">iTourParis</Link></li>
        <li className='active'><Link to='/blog'>Blog</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;