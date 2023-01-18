const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
  userid: { type: mongoose.Schema.ObjectId, ref: "User", require: true },
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const UrlModel = mongoose.model("urls", UrlSchema);

module.exports = UrlModel;
