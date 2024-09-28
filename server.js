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

// Serve the HTML file at the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'query.html'));
});

app.post('/api/recommendations', async (req, res) => {
  try {
    const userPreferences = req.body;
    const recommendations = await processUserInput(userPreferences);
    res.json({ recommendations });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: `Server error: ${error.message}`, stack: error.stack });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});