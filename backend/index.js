const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/lead', async (req, res) => {
  const { name, email, company, message } = req.body;
  console.log('POST /api/lead hit with data:', req.body);

  if (!name || !email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ status: 'error', msg: 'Invalid input' });
  }

  try {
    await axios.post(process.env.N8N_WEBHOOK_URL, {
      name,
      email,
      company,
      message,
    });
    res.json({ status: 'success' });
  } catch (err) {
    console.error(' Error sending to n8n:', err.message);
    if (err.response) {
      console.error('n8n response:', err.response.data);
    }
    res.status(500).json({ status: 'error', msg: 'Error sending to n8n' });
  }
}); 

app.get('/', (req, res) => {
  res.send('Welcome to the Lead Generation System!');
});

app.listen(PORT, () => {
  console.log(` Backend running on http://localhost:${PORT}`);
});
