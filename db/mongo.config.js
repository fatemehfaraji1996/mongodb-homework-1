const mongoose = require('mongoose');
require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3000
// Connect to a Database using Mongoose and a Connection String
const db = async () => {
  try {
    await mongoose.connect(process.env.URL)
    app.listen(3000,()=>{
     console.log("run");
    })
  } catch (error) {
    console.log("error");
  }
  // write your code here
};
db()
module.exports = { db };
