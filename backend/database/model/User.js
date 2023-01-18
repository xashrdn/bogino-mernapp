const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
    minlength: [8, "Password lenght must be at least 6 characters"],
    maxlength: [61, "Password lenght must be containst 61 characters"],
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
