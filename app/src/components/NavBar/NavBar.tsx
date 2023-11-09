import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">iTourParis</Link></li>
        <li className='active'><Link to='/tour-guide'>Book a Tour Guide</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;