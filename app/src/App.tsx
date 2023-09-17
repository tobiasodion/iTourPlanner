import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import AppMenuList from './AppMenuList/AppMenuList';

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <AppMenuList />
      </div>
      <Footer />
    </>
  );
}

export default App;
