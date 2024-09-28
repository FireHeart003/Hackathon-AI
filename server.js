import express from 'express';
import { processUserInput } from './qna.js';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


function validateInput(input) {
  return typeof input === 'string' && !/\d/.test(input);
}

app.post('/api/recommendations', async (req, res) => {
  try {
    const userPreferences = req.body;
    
    // Validate each input
    for (const [key, value] of Object.entries(userPreferences)) {
      if (!validateInput(value)) {
        return res.status(400).json({ error: `${key} should not contain numbers and must be a string.` });
      }
    }

    const recommendations = await processUserInput(userPreferences);
    res.json({ recommendations });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: `Server error: ${error.message}` });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});