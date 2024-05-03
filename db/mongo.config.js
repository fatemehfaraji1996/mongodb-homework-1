const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.URL;
const db = async () => {
  try {
    await mongoose.connect(uri);
    console.log("connected to databace");
  } catch (error) {
    console.log("error");
  }
};

db();
module.exports = { db };
