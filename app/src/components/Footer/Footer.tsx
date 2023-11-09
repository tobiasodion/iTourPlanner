import React from 'react';
import './Footer.css'
import SubscribeForm from '../SubscribeForm/SubscribeForm';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-subscribe">
          <div>
            <h4>Sign up for Newsletters</h4>
          </div>
          <SubscribeForm></SubscribeForm>
        </div>
        <div className="footer-about">
          <div>
            <h4>About</h4>
          </div>
          <div className='menu'>
            <ul>
              <li>iTourParis</li>
              <li>Meet our Team</li>
              <li>Contact Us</li>
              <li>Our Services</li>
            </ul>
          </div>
        </div>
        <div className='social-icon'>
          <a href="https://www.instagram.com/itourparis/" target="_blank" rel="noopener noreferrer">
            <span className="fa-stack fa-lg">
              <i className="fab fa-instagram fa-stack-1x"></i>
            </span>
          </a>
        </div>
      </div>
      <footer>
        <div>
          <p>copyright <span>@itourparis</span> 2023</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;