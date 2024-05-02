const mongoose = require('mongoose');


//1- Create a Mongoose Schema with the following fields:


// name: String
// age: Number
// gender: String
// exp (experience): Number
// type: String
// qualification: String

//2- Create a Mongoose Model named "Faculty" using the schema defined above.

const facultySchema = new mongoose.Schema({
name: String,
age: Number,
gender: String,
exp: Number,
type: String,
qualification: String
})

const Faculty = mongoose.model('faculty',facultySchema)

module.exports = { Faculty };

