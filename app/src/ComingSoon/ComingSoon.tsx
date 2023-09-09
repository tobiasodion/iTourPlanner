import React from 'react';
import logo from '../itourparis-logo.svg';
import './ComingSoon.css';

function ComingSoon() {
  return (
        <div className="coming-soon">
          <img src={logo} className="logo" alt="iTourParis Logo" />
          <div className="content">
            <h1 className="custom-font">Coming Soon</h1>
            <p>We're working hard to bring you something amazing.</p>
          </div>
        </div>
  );
}

export default ComingSoon;
