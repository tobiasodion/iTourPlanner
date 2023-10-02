import { useState } from 'react';
import TourRecommendationForm from '../components/TourRecommendationForm/TourRecommendationForm';
import TourRecommendationList from '../components/TourRecommendationList/TourRecommendationList';
import { SpinnerProps, TourRecommendationListProp } from '../types/PropTypes';
import Spinner from '../components/Spinner/Spinner';

function TourRecommendation() {
    const [recommendations, setRecommendations] = useState<TourRecommendationListProp>();
    const [loading, setLoading] = useState(false)

    const handleRecommendationsChange = (fetchedRecommendations: TourRecommendationListProp) => {
        setRecommendations({ ...fetchedRecommendations });
    }

    const handleLoading = (isLoading: boolean) => {
        setLoading(isLoading);
    }

    const spinnerProps : SpinnerProps = {
        spinnerDiameter : 50,
        loadingMessages: ["Please wait while we get your recommendations...", "Loading Recommendations...", "Almost there..."]
    }

    return (
        <>
            <div style={{ paddingTop: "5%", paddingBottom: "5%" }}>
                <TourRecommendationForm
                    onRecommendationsChange={handleRecommendationsChange}
                    onLoading={handleLoading}></TourRecommendationForm>
            </div>
            <div>
                {loading ? (<Spinner {...spinnerProps}></Spinner>) : null}
                {recommendations?.tourRecommendationList.length === 0 || recommendations === undefined || loading ? null : (<TourRecommendationList {...recommendations}></TourRecommendationList>)}
            </div>
        </>
    );
}

export default TourRecommendation;
