const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');
require('dotenv').config();

connectDB();

// Middleware to parse JSON
app.use(express.json());

// Root Route
app.use('/api/users', userRoutes);
app.use('/api/products',productRoutes);
// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
