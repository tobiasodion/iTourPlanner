// openaiService.ts
import axios from 'axios';

// Function to call the OpenAI completion endpoint
export const getCompletion = async (prompt: string) => {
    // Replace 'YOUR_API_KEY' with your actual OpenAI API key
    const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

    const openai = axios.create({
        baseURL: 'https://api.openai.com/v1',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
    });

    try {
        const response = await openai.post('/completions', {
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 700
        });
        return response.data.choices[0].text;
    } catch (error) {
       //log error
        throw error;
    }
};
