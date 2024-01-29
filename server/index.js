const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb+srv://adam:EPQfpcJi2hwnsCoW@cluster0.ujd6hhy.mongodb.net/lb4all');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

// Call the function to connect to the database
connectToDatabase();
// Middleware to log IP address
const logIpAddress = (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress;
    console.log(`Request from IP: ${ip}`);
    next();
};

// Apply middleware to log IP address for all routes
app.use(logIpAddress);

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Serverr is running on http://localhost:${PORT}`);
});
