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
