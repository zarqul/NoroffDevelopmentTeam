const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

// Initialise Express
const app = express();

// Database URI from MongoDB Atlas
const dbURI = process.env.MongoURI;

// Connect to database and start Express if connection is successful
mongoose.connect(dbURI)
.then((result) => {
    console.log("Mongoose connected to DB successfully");
    app.listen(3000, function (err) {
        if(err) console.log("Express failed to start: "+err)
        console.log(`Express server is listening on port 3000`);
    })
})
.catch((err) => console.log("Could not connect to database"));

app.get('/', (req, res) => {
    res.send('Hello, World');
})