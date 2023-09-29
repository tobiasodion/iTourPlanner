import { useState } from 'react';
import TourRecommendationForm from '../components/TourRecommendationForm/TourRecommendationForm';
import TourRecommendationList from '../components/TourRecommendationList/TourRecommendationList';
import { TourRecommendationListProp } from '../types/PropTypes';

function TourRecommendation() {
    const [recommendations, setRecommendations] = useState<TourRecommendationListProp>();

    const handleRecommendationsChange = (fetchedRecommendations: TourRecommendationListProp) => {
        setRecommendations({ ...fetchedRecommendations });
    }

    return (
        <>
            <div style={{ paddingTop: "5%", paddingBottom: "5%" }}>
                <TourRecommendationForm onRecommendationsChange={handleRecommendationsChange}></TourRecommendationForm>
            </div>
            <div>
                {recommendations === undefined ? null : (<TourRecommendationList {...recommendations}></TourRecommendationList>)}
            </div>
        </>
    );
}

export default TourRecommendation;
