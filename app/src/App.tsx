import React from 'react';
import logo from './itourparis-logo.svg'
import './App.css';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import ComingSoon from './ComingSoon/ComingSoon';

function App() {
  return (
    <div className='container'>
    <NavBar/>
    <ComingSoon />
    <Footer/>
    </div>
  );
}

export default App;
