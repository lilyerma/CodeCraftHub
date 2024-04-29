const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['student', 'instructor'],
    default: 'student',
  },
  // Add more fields as needed for user profile data
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;