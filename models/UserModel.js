const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  birthDate: {
    type: Date,
    required: true,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
