const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024
  },
  profilePicture: {
    type: String,
    required: false, default: '/uploads/students/default_student.png'
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

module.exports = mongoose.model('user', UserSchema)

