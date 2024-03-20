// routes/authRoutes.js
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');

router.post('/login', async (req, res) => {
  try {
    // Validate user credentials
    const { phone_number } = req.body;
    const user = await User.findOne({ phone_number });

    if (!user) {
      return res.status(401).json({ error: 'Invalid phone number' });
    }

    // Generate JWT token
    const token = jwt.sign({ user_id: user._id }, 'your_secret_key');
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
