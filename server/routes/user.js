const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register endpoint
router.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Validate input
    if (!username || !password || !email) {
      return res.status(400).json({ message: 'Username, password, and email are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword,
      email,
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ username }, 'secret-key');
      res.status(201).json({ token });
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete user endpoint
router.delete('/delete/:username', async (req, res) => {
  try {
    const { username } = req.params;

    // Find and delete the user
    const deletedUser = await User.findOneAndDelete({ username });

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router