// Esquema para User
// import mongoose from "mongoose";
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: 'https://i.ibb.co/L8f3q6p/buddy-profile.jpg' },
  createdAt: { type: String, default: Date.now }
});

// export default mongoose.model('User', UserSchema)
module.exports = mongoose.model('User', UserSchema)