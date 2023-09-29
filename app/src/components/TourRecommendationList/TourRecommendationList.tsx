import React, { useState } from 'react';
import './TourRecommendationList.css';
import TourRecommendationCard from '../TourRecommendationCard/TourRecommendationCard';
import { TourRecommendationListProp } from '../../types/PropTypes';

function TourRecommendationList(props: TourRecommendationListProp) {
  const [tourRecommendationList] = useState<TourRecommendationListProp>(props);
  const [index, setIndex] = useState<number>(0);
  const [previousDisabled, setPreviousDisabled] = useState<boolean>(true);
  const [nextDisabled, setNextDisabled] = useState<boolean>(false);

  const recommendationList = tourRecommendationList.tourRecommendationList;

  const handlePreviousClick = () => {
    let currentIndex = index;
    setIndex(--currentIndex);

    setPreviousDisabled(false);
    setNextDisabled(false);
    if (currentIndex === 0) {
      setPreviousDisabled(true);
    }
  }

  const handleNextClick = () => {
    let currentIndex = index;
    setIndex(++currentIndex);
    setPreviousDisabled(false);
    setNextDisabled(false);

    if (currentIndex === recommendationList.length - 1) {
      setNextDisabled(true);
    }
  }

  return (
    <>
      <div className="recommendation-list-paged">
        <TourRecommendationCard {...recommendationList[index]} />
      </div>
      <div className="recommendation-list-page-nav">
        <button onClick={handlePreviousClick} disabled={previousDisabled}>Previous</button>
        <span>{index + 1}/{recommendationList.length}</span>
        <button onClick={handleNextClick} disabled={nextDisabled}>Next</button>
      </div>
    </>
  );
}

export default TourRecommendationList;
