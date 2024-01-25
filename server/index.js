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

const userRoutes = require('./routes/userRoutes');

app.use('/users', userRoutes);


app.listen(PORT, () => {
    console.log(`Serverr is running on http://localhost:${PORT}`);
});
