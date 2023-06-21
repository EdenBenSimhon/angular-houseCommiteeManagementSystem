const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const tenants = require("./routes/tenants")
const payments = require("./routes/payments")
const updates = require("./routes/updates")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const jwtKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

const pool = require('./routes/db');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//The communication with frontend server


app.use('/login',async (req, res) => {
  var data = req.body;
  console.log(data)
  var message = await tenants.login(data);
  // const isPasswordValid = await bcrypt.compare(password, user.password);
  // if (!isPasswordValid) {
  //   return res.status(401).json({ error: 'Invalid username or password' });
  // }
  res.status(200).json({
  message
  });
});

app.use('/paymentHistory' ,async (req,res) => {
  var data = req.body;
  var message = await payments.getPaymentsByApartmentNumber(data);
  console.log(message)
  res.status(200).json({
    message
  });
});


app.use('/register',async (req, res) => {
  var data = req.body;
  console.log(data);
  var message = await tenants.register(data);
  console.log(message)
  res.status(200).json({
    message
  });
});


app.use('/updates' ,async (req,res) => {
  var data = req.body;
  var message = await updates.getUpdates();
  console.log(message)
  res.status(200).json({
    message
  });
});
app.use('/createupdate' ,async (req,res) => {
  console.log(req)
  var data = req.body;
  var message = await updates.createUpdate(data);
  res.status(200).json({
    message
  });
});


app.use('/tenants' ,async (req,res) =>{
  var data = req.body;
  var message = await tenants.getTenants(data);
  console.log(message)
  res.status(200).json({
    message
  });
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

