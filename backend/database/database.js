const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectionString = process.env.MONGO_URI || "";
exports.connectDb = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log(`Successfully connected`);
  } catch (err) {
    console.log(err.message);
  }
};
