import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

// Check if .env file exists
const envPath = path.join(__dirname, '.env');
console.log('.env file exists:', fs.existsSync(envPath));

// Log the contents of .env file (be careful with sensitive information)
if (fs.existsSync(envPath)) {
  console.log('.env file contents:');
  console.log(fs.readFileSync(envPath, 'utf8').replace(/=.*/g, '=<redacted>'));
}

const apiKey = process.env.GOOGLE_API_KEY;
console.log("API Key loaded:", apiKey ? "Yes" : "No");

if (!apiKey) {
  console.error("API Key is not set. Please check your .env file.");
  process.exit(1);
}

console.log("API Key (first 10 characters):", apiKey.substring(0, 10) + "...");

const genAI = new GoogleGenerativeAI(apiKey);

async function testGemini() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = "Hello, world!";
    
    console.log("Sending request to Gemini API...");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log("Response from Gemini:", text);
  } catch (error) {
    console.error("Error:", error.message);
    if (error.response) {
      console.error("Response status:", error.response.status);
      console.error("Response data:", error.response.data);
    }
  }
}

testGemini();