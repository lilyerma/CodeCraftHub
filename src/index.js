const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');

// Initialize Express app
const app = express();

// Connect to MongoDB database
connectDB();

// Middleware to parse JSON data
app.use(express.json());

// Define API routes
app.use('/api/users', userRoutes);

// Set up server port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});