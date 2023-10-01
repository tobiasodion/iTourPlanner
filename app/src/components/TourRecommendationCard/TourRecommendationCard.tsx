import React from 'react';
import './TourRecommendationCard.css';
import { TourRecommendationCardProp } from '../../types/PropTypes';

function TourRecommendationCard(props: TourRecommendationCardProp) {
  const { name, description, address, entry, website } = props;
  return (
    <div className="recommendation-list-item">
      <div className="recommendation-name">
        <h2>{name}</h2>
      </div>
      <div className="recommendation-address">
        <h4>{address}</h4>
      </div>
      <div className="recommendation-description">
        <p>{description}<span><a href={website} target="_blank" rel="noopener noreferrer">visit website</a></span></p>
      </div>
      <div className="recommendation-entry">
        Entry: ${entry}
      </div>
    </div>
  );
}

export default TourRecommendationCard;