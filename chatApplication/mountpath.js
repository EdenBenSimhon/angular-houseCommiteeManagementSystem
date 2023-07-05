// app.disable() Method Demo Example

// Importing the express module
const express = require('express');

// Initializing the express and port number
var app = express();

// Initializing the router from express
var router = express.Router();
var PORT = 3002;

// Disabling the property foo
app.disable('trust proxy');

// Checking the foo property
console.log(app.get('trust proxy'));
