const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   name: { type: String, default: null },
   username: { type: String, default: null },
   email: { type: String, unique: true },
   password: { type: String },
   user_Photo: {type: String, required: false, default: '/uploads/users/default_profile.png'},
   token: { type: String },
 
})

module.exports = mongoose.model("user", UserSchema);

