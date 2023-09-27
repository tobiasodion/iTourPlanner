import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ComingSoon from '../components/ComingSoon/ComingSoon';
import NotFound from '../components/NotFound/NotFound';
import Home from '../pages/Home';

function Router() {
    return (
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/tour-guide" Component={ComingSoon} />
            <Route path="/tour-recommender" Component={ComingSoon} />
            <Route path="/blog" Component={ComingSoon} />
            <Route path="*" Component={NotFound} />
        </Routes>
    );
}

export default Router;