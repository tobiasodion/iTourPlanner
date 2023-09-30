import { useState } from "react";
import { TourRecommendationCardProp, TourRecommendationFormProps, TourRecommendationListProp } from "../../types/PropTypes";
import './TourRecommendationForm.css';
import { getCompletion } from "../../services/recommender-service";

function TourRecommendationForm(props: TourRecommendationFormProps) {
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [selectedInterest, setSelectedInterest] = useState<string>('');
    const [error, setError] = useState<string>('');

    const cities = ['Paris', 'Lagos', 'Barcelona', 'Lisbon'];
    const interests = ['Art', 'Sports', 'Music', 'Food'];

    const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setError('');
        setSelectedCity(event.target.value);
    };

    const handleInterestChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setError('');
        setSelectedInterest(event.target.value);
    };

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (selectedCity === '') {
            setError('Please select a city');
            return;
        }

        if (selectedInterest === '') {
            setError('Please select an interest');
            return;
        }

        const prompt = `Top 5 places to visit in ${selectedCity} for a person interested in ${selectedInterest}. 
                        Must include a description(in three sentences) of the place. 
                        The entry must be an integer value(0 if free) of the entry fee in dollars. 
                        The result must be a valid JSON object(without formatting) 
                        with the following structure: An array containing five objects. 
                        Each object will contain properties name, description, address, entry and website`

        try {
            const result = await getCompletion(prompt);

            //Regex to find the array string in the result from gpt
            const regex = /\[[^\]]+\]/g;
            const matches = result.match(regex);

            if (!matches || matches.length === 0) {
                throw new Error(`Invalid JSON string result. Result: ${result}`);
            }

            const match = matches[0];

            const recommendations: TourRecommendationCardProp[] = JSON.parse(match);

            if (!recommendations || recommendations.length === 0) {
                throw new Error(`Empty JSON array. JSON: ${recommendations}`);
            }

            let tourRecommendationListData: TourRecommendationListProp = { tourRecommendationList: recommendations };

            props.onRecommendationsChange({ ...tourRecommendationListData });

        } catch (error) {
            alert(`something went wrong! Error: ${error}`);
        }
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
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button type="submit">Recommend</button>
        </form>
    )
}

export default TourRecommendationForm;