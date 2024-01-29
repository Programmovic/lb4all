const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/auth');
const isStrongPassword = require('../utils/passwordStrength');


// Signup
router.post('/signup', async (req, res) => {
    try {
        const { Username, Email, Phone, Password } = req.body;

        // Check if a user with the same username already exists
        const existingUsername = await User.findOne({ Username });
        if (existingUsername) {
            return res.status(409).json({ message: `${Username} is already taken.` });
        }

        // Check if a user with the same email already exists
        const existingEmail = await User.findOne({ Email });
        if (existingEmail) {
            return res.status(409).json({ message: `${Email} is already registered.` });
        }

        const existingPhone = await User.findOne({ Phone });
        if (existingPhone) {
            return res.status(409).json({ message: `${Phone} is already registered.` });
        }
        // Check password strength
        if (!isStrongPassword(Password)) {
            return res.status(400).json({ message: 'Password does not meet the required strength criteria.' });
        }

        // If no duplicate and password is strong, create a new user
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Login
router.post('/login', async (req, res) => {
    try {
        const { Username, Password } = req.body;
        const user = await User.findOne({ Username });

        if (!user || !(await user.comparePassword(Password))) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        const token = jwt.sign({ UserID: user.UserID, Username: user.Username }, 'your-secret-key', { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a specific user by ID
router.get('/:userID', async (req, res) => {
    try {
        const user = await User.findById(req.params.userID);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a user by ID
router.put('/:userID', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userID, req.body, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a user by ID
router.delete('/:userID', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.userID);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/search', async (req, res) => {
    try {
        const { query } = req.query;
        console.log(query);

        // Use a case-insensitive regex to search for users by Username or Email
        const users = await User.find({
            $or: [
                { Username: { $regex: new RegExp(query, 'i') } },
                { Email: { $regex: new RegExp(query, 'i') } }
            ]
        });

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
