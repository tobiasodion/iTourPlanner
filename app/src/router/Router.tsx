import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ComingSoon from '../components/ComingSoon/ComingSoon';
import NotFound from '../components/NotFound/NotFound';
import Blog from '../pages/Blog';
import TourRecommendation from '../pages/TourRecommendation';

function Router() {
    return (
        <Routes>
            <Route path="/" Component={Blog} />
            <Route path="/tour-guide" Component={ComingSoon} />
            <Route path="/tour-recommender" Component={TourRecommendation} />
            <Route path="*" Component={NotFound} />
        </Routes>
    );
}

export default Router;