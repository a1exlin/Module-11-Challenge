// Require Dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// ANY app.use is considered middleware
// Setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// any static must be looking for public folder
app.use(express.static("public"));

//Require routes file
require('./routes/routes')(app);

// Setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  