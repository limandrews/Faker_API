//IMPORTING EXPRESS. COMMON JS IMPORT.
const express = require('express');
//INSTANTIATING EXPRESS APP
const app = express();
let User = require('./User');
let Company = require('./Company');

//middleware to handle json post request
app.use(express.json())

//GET
app.get("/api", (req, res) => {
    res.json({ "msg": "You have reached api" });
});

// create a new user 
app.get("/api/users/new", (req, res) => {
    const newUser = new User();
    res.status(201).json(newUser)
});

// create a new company 
app.get("/api/companies/new", (req, res) => {
    const newCompany = new Company();
    res.status(201).json(newCompany)
});

// create a new user and company 
app.get("/api/user/company", (req, res) => {
    const newUser = new User();
    const newCompany = new Company();
    res.status(201).json({newUser, newCompany})
});

//WHICH PORT
app.listen(8000, () => console.log('listening on port ' + 8000));


