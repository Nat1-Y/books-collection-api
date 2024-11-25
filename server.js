const express = require('express');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/books');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// Connect to Database
connectDB();

// API Routes
app.use('/books', bookRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
