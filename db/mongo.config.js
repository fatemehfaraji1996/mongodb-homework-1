const mongoose = require('mongoose');
require('dotenv').config()
const express = require('express')
const app = express()
// app.use(express.json())
const PORT = 8000
// Connect to a Database using Mongoose and a Connection String
const db = async () => {

  try {
    await mongoose.connect(process.env.URL)
    app.listen(PORT,()=>{
     console.log("run");
    })
  } catch (error) {
    console.log("error");
  }
  // write your code here
};

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
app.post('/seve'),async(req,res)=>{
  const data =req.body
  console.log(data);
  try {
    await Faculty.insertMany(data)
    res.statuse(200).json({massage:'all data seve'})
  } catch (error) {
    res.send('eror')
  }
}

app.get('/', async (req, res) => {
    try {
      const users = await last.find({});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  
})






db()
module.exports = { db };
