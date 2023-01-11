const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const UrlModel = mongoose.model("urls", UrlSchema);

module.exports = UrlModel;
