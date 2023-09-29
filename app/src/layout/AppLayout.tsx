import React from 'react';
import './AppLayout.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import { LayoutProp } from '../types/PropTypes';

function AppContainer({ children }: LayoutProp) {
    return (
        <>
            <NavBar />
            <div className='container'>
                {children}
            </div>
            <Footer />
        </>
    );
}

export default AppContainer;