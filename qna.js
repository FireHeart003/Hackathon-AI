import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
//update the code so that user's can only input.. 

dotenv.config();

const apiKey = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Function to get career recommendations based on user input
async function getCareerRecommendations(userInput) {
  console.log('Starting getCareerRecommendations with input:', userInput);
  try {
    console.log('Calling Gemini API...');
    const startTime = Date.now();

    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Based on the following user preferences, suggest the top 3 career paths and relevant university courses: ${userInput}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const endTime = Date.now();
    console.log(`Gemini API call completed in ${endTime - startTime}ms`);
    return text;
  } catch (error) {
    console.error('Error in getCareerRecommendations:', error);
    throw error;
  }
}

// Function to process user input and get recommendations
async function processUserInput(userPreferences) {
  console.log('Starting processUserInput with preferences:', userPreferences);
  const userInput = `
    Interests: ${userPreferences.interests},
    Skills: ${userPreferences.skills},
    Values: ${userPreferences.values},
    Preferred work environment: ${userPreferences.workEnvironment}
  `;

  try {
    const recommendations = await getCareerRecommendations(userInput);
    console.log('Recommendations received:', recommendations);
    return recommendations;
  } catch (error) {
    console.error('Error in processUserInput:', error);
    return 'Unable to provide suggestions. Error: ' + error.message;
  }
}

export { processUserInput, getCareerRecommendations };