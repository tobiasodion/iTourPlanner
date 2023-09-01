import React from 'react';
import logo from './itourparis-logo.svg'
import './App.css';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container className="p-3">
      <div className="coming-soon">
        <div className="content">
          <img src={logo} className="logo" alt="iTourParis Logo" />
          <h1 className="custom-font">Coming Soon</h1>
          <p>We're working hard to bring you something amazing.</p>
        </div>
      </div>
    </Container>
  );
}

export default App;
