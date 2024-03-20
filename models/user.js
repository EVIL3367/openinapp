// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone_number: { type: Number, required: true },
  priority: { type: Number, enum: [0, 1, 2], required: true },
});

module.exports = mongoose.model('User', userSchema);
