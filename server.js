const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const NEWS_API_KEY = '0a70cc05ea344d5bb33fcd2a5927e460';

app.use(cors());

app.get('/news', async (req, res) => {
    const query = req.query.q || 'India';
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${NEWS_API_KEY}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from NewsAPI' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
