const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Configure environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});