import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li><a>iTourParis</a></li>
        <li className='active'><a>Blog</a></li>
      </ul>
    </div>
  );
}

export default NavBar;