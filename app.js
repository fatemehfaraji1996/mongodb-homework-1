const express = require('express')
const cors = require('cors')
const bodyParser =require('body-parser')
const router = require("express").Router()
require('dotenv').config()
const PORT =process.env.APP_PORT ||5000
const app = express()
app.use(express.json())
app.use(bodyParser.text())
app.use(cors())
/*
1- Store all faculty members in a collection called Faculty in your database.

2- Write a function to retrieve all faculty members from the database using Mongoose.

3- Write a function to get the count of all faculty members.

4- Write a function to retrieve all faculty members whose qualification is "Ph.D".

5- Write a function to insert new faculty members into the database. (Member's data is stored in the member variable):

6- Write a function to update the faculty member named "Sivani" with the following data: update qualification to "Ph.D" and type to "Full Time".

7- Write a function to delete a faculty member named 'Mani'.

Optional:
8- Write a function to delete all faculty members whose age is more than 39 years.


*/

// do not change these codes
/////////////////////////

const { db } = require('./db/mongo.config');
const { Faculty } = require('./model/schema');
// start

db();

const member = {
  name: 'Suresh Babu',
  age: 55,
  gender: 'M',
  exp: 25,
  type: 'Full Time',
  qualification: 'Ph.D',
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
  },
  {
    name: 'Anush',
    age: 32,
    gender: 'F',
    exp: 8,
    type: 'Part Time',
    qualification: 'M.Tech',
  },
  {
    name: 'Suresh',
    age: 40,
    gender: 'M',
    exp: 9,
    type: 'Full Time',
    qualification: 'Ph.D',
  },
  {
    name: 'Rajesh',
    age: 35,
    gender: 'M',
    exp: 7,
    type: 'Full Time',
    qualification: 'M.Tech',
  },
  {
    name: 'Mani',
    age: 38,
    gender: 'F',
    exp: 10,
    type: 'Part Time',
    qualification: 'Ph.D',
  },
  {
    name: 'Sivani',
    age: 32,
    gender: 'F',
    exp: 8,
    type: 'Part Time',
    qualification: 'M.Tech',
  },
  {
    name: 'Nagesh',
    age: 39,
    gender: 'M',
    exp: 11,
    type: 'Full Time',
    qualification: 'Ph.D',
  },
  {
    name: 'Nagesh',
    age: 35,
    gender: 'M',
    exp: 9,
    type: 'Full Time',
    qualification: 'Ph.D',
  },
  {
    name: 'Latha',
    age: 40,
    gender: 'F',
    exp: 13,
    type: 'Full Time',
    qualification: 'Ph.D',
  },
];
// start 
//  Q1
function post(params) {
  for(let x of data){
    Faculty.insertMany(x).then(()=>{
     console.log( "seve sacsesefully");
    }).catch((error)=>{
      console.log(console.error("eroore"));
    })
  }
  
}
// post()
// Q2
app.get('/',async(req,res)=>{
  console.log("hiiii");
const users = await Faculty.find({})
console.log(res.json(users));
})
// Q3
app.get("/count",async(req,res)=>{
   let count = await Faculty.countDocuments({}).then((count)=>{
      console.log(count);
      res.json(count)
   }).catch((erore)=>{
console.log(erore);
   })
})
// Q4
// app.get('/phd',async(req,res)=>{
// const phd = await Faculty.find({qualification:'ph.D'}).then((phd)=>{
//   console.log(phd);
//   res.send(json(phd))
// }).catch((erore)=>{
// console.log(erore);
// })
// console.log(res.json(phd));
// })

// Q5
app.post('/insert',async(req,res)=>{
  try {
    const member = req.body;
    const newBlog = await Faculty.create(member);
    res.status(201).json(newBlog);
    console.log('ok');
  } catch (error) {
    res.status(500).json({ message: error });
  }
})
// Q6
app.patch('/update/:name',async(req,res)=>{
console.log(req.params.name)
res.send(req.params.name)

})
// Q7
app.delete('/delet/:name',async(req,res)=>{
const name = req.body.name
// const del = await
})





app.listen(PORT,()=>{
  console.log("Your port is run");
})