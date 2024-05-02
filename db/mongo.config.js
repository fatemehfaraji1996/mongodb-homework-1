const mongoose = require('mongoose');
require('dotenv').config()
const express = require('express')
const app = express()
// app.use(app.json())
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

app.post('/seveAll'),async(req,res)=>{
  
  const data =req.body
  console.log(data);
  try {
    await Faculty.insertMany(data)
    res.statuse(200).json({massage:'all data seve'})
  } catch (error) {
    res.send('eror')
  }
}

const data = [
  {
    name: 'Krish',
    age: 35,
    gender: 'M',
    exp: 10,
    type: 'Full Time',
    qualification: 'M.Tech',
  },
  {
    name: 'Manoj',
    age: 38,
    gender: 'M',
    exp: 12,
    type: 'Full Time',
    qualification: 'Ph.D',
  }]



db()
module.exports = { db };
