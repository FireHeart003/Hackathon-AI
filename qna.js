import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
//update the code so that user's can only input.. 

var responseText = '';

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

    const prompt = `Only choose from the list of available bachelors in the user input. Here are the options: College of Arts, Sciences and Education: Offers a Bachelor of Arts in Biological Sciences, Chemistry, Earth Sciences, English, English Education, Global Educational Studies, Interdisciplinary Studies, Liberal Studies, Mathematics with Mathematics Education, Natural and Applied Sciences, Philosophy, Physics, Psychology, Rehabilitation and Recreational Therapy, Sustainability and the Environment, Women's and Gender Studies. It also offers a Bachelor of Science in Behavioral Neuroscience, Biochemistry, Biological Sciences, Chemistry, Early Childhood Education, Elementary Education, Environmental Studies, Exceptional Student Education, Geosciences, Marine Biology, Mathematical Sciences, Physics, Physical Education, Sport and Recreation Management, Rehabilitation and Recreational Therapy, Statistics. College of Business: Offers a Bachelor of Accounting and a Bachelor of Business Administration with a Major in Business Analytics, Finance, Human Resource Management, International Business, Logistics and Supply Chain Management, Management, Management Information Systems, Marketing, Real Estate. College of Communication, Architecture + The Arts: Offers an Accelerated Master of Architecture, Interior Architecture, Landscape Architecture. It also offers a Bachelor of Arts in Art, Art History, Communication Arts, Music, Theatre, and a Bachelor of Fine Arts in Art, Theatre, Digital Arts. Additionally, it offers a Bachelor of Music and a Bachelor of Science in Art Education. College of Engineering and Computing: Offers a Bachelor of Arts in Information Technology, Computer Science, and a Bachelor of Science in Biomedical Engineering, Civil Engineering, Computer Engineering, Computer Science, Construction Management, Cybersecurity, Electrical Engineering, Environmental Engineering, Information Technology, Interdisciplinary Engineering, Internet of Things, Mechanical Engineering. Nicole Wertheim College of Nursing and Health Sciences: Offers a Bachelor of Health Services Administration and a Bachelor of Science in Nursing. Robert Stempel College of Public Health and Social Work: Offers a Bachelor of Arts in Disaster Management and a Bachelor of Science in Dietetics and Nutrition, Social Work. Chaplin School of Hospitality and Tourism Management: Offers a Bachelor of Arts in Global Sustainable Tourism and a Bachelor of Science in Hospitality and Tourism Management. Steven J. Green School of International and Public Affairs: Offers a Bachelor of Arts in Asian Studies, Economics, History, International Relations, Latin American and Caribbean Studies, Political Science, Religious Studies, Spanish. It also offers a Bachelor of Arts in Global Languages, Cultures and Literatures with Majors in French and Francophone Studies, Portuguese and Lusophone Studies, Dual Majors. Additionally, it offers a Bachelor of Arts in Global Studies with Majors in Anthropology, Geography, Sociology, Interdisciplinary and Area Studies, as well as a Bachelor of Science in Criminal Justice, Crime Science, Economics, and a Bachelor of Public Policy and Service. Based on the following user preferences and the list of possible options, suggest the top 3 bachelor degrees that align with the user's preferences, specify the college as well. Carefully analyze the responses and the possible choices to ensure you provide the most accurate and relevant recommendations. Add a brief description of the degree and separate the recommendation with a newline. Also ensure that there are no asterisks in the output. Follow this structure: Degree (College): Description, new paragraph. ${userInput}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    responseText = text;

    const endTime = Date.now();
    console.log(`Gemini API call completed in ${endTime - startTime}ms`);
    return text;
  } catch (error) {
    console.error('Error in getCareerRecommendations:', error);
    throw error;
  }
}

async function getNetworkingRecommendations(userInput) {
    console.log('Starting getNetworkingRecommendations with input:', userInput);
    try {
      console.log('Calling Gemini API for networking recommendations...');
      const startTime = Date.now();
  
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
      const prompt = `Based on the following user preferences, suggest the top 3 school organizations or 
      clubs to join that would be beneficial for networking and career development. 
      For each organization, provide a brief description of its focus and potential benefits. 
      User preferences: ${userInput}`;
  
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      responseText = text;
  
      const endTime = Date.now();
      console.log(`Gemini API call for networking completed in ${endTime - startTime}ms`);
      return text;
    } catch (error) {
      console.error('Error in getNetworkingRecommendations:', error);
      throw error;
    }
  }

// Function to process user input and get recommendations
async function processUserInput(userPreferences, type = 'career') {
    console.log(`Starting processUserInput for ${type} with preferences:`, userPreferences);
    const userInput = `
      Interests: ${userPreferences.interests},
      Skills: ${userPreferences.skills},
      Values: ${userPreferences.values},
      Preferred work environment: ${userPreferences.workEnvironment}
    `;

//   try {
//     const recommendations = await getCareerRecommendations(userInput);
//     console.log('Recommendations received:', recommendations);
//     return recommendations;
//   } catch (error) {
//     console.error('Error in processUserInput:', error);
//     return 'Unable to provide suggestions. Error: ' + error.message;
//   }
  try {
    const recommendations = type === 'career' 
      ? await getCareerRecommendations(userInput)
      : await getNetworkingRecommendations(userInput);
    console.log('Recommendations received:', recommendations);
    return recommendations;
  } catch (error) {
    console.error(`Error in processUserInput for ${type}:`, error);
    return 'Unable to provide suggestions. Error: ' + error.message;
  }
}

export { processUserInput/*, getCareerRecommendations*/ };