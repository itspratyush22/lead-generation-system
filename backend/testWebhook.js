const axios = require('axios');
require('dotenv').config();

(async () => {
  try {
    const res = await axios.post(process.env.N8N_WEBHOOK_URL, { test: 'ping' });
    console.log('Webhook response:', res.data);
  } catch (err) {
    console.error('Webhook POST failed:', err.response?.data || err.message);
  }
})();
