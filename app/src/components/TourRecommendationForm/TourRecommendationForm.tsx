import { useState } from "react";
import { TourRecommendationFormProps } from "../../types/PropTypes";
import './TourRecommendationForm.css';
import { tourRecommendationListData } from "../../data/PropData";

function TourRecommendationForm(props: TourRecommendationFormProps) {
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [selectedInterest, setSelectedInterest] = useState<string>('');

    const cities = ['Paris', 'Lagos', 'Barcelona', 'Lisbon'];
    const interests = ['Art', 'Sports', 'Music', 'Food'];

    const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(event.target.value);
    };

    const handleInterestChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedInterest(event.target.value);
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let recommendations = { ...tourRecommendationListData };
        //Fetch the recommendations
        // Pass the recommendations back to the parent component
        props.onRecommendationsChange(recommendations);
    };

    return (
        <form className="recommendation-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
                <label htmlFor="city">City:</label>
                <select className="custom-dropdown" id="city" value={selectedCity} onChange={handleCityChange}>
                    <option value="">Select a city</option>
                    {cities.map((city) => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="interest">Interest:</label>
                <select className="custom-dropdown" id="interest" value={selectedInterest} onChange={handleInterestChange}>
                    <option value="">Select an interest</option>
                    {interests.map((interest) => (
                        <option key={interest} value={interest}>
                            {interest}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Recommend</button>
        </form>
    )
}

export default TourRecommendationForm;