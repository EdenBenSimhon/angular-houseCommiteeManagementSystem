const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const  auth = require("./routes/auth")
const tenants = require("./routes/tenants")
const payments = require("./routes/payments")
const updates = require("./routes/updates")
const apartments = require("./routes/apartments")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {format} = require('date-fns');
const {subDays} = require('date-fns');
const {formatDistance} = require('date-fns');


const compareAsc = require ('date-fns');
const pool = require('./db/pg/db');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//The communication with frontend server

app.use('/login',async (req, res) => {
//   console.log(formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }));
//   console.log(format(new Date(2014, 1, 11), 'MM/dd/yyyy'));
// //=> '02/11/2014'
//
//   const dates = [
//     new Date(1995, 6, 2),
//     new Date(1987, 1, 11),
//     new Date(1989, 6, 10),
//   ]
//   console.log(dates);
  var data = req.body;
  var message = await tenants.login(data);
  var token = await auth.createToken(message)
  res.status(200).json({
  message,
  token
  });
});

app.use('/paymentHistory' ,async (req,res) => {
  var data = req.body;
  var message = await payments.getPaymentsByApartmentNumber(data.apartmentNumber);
  console.log(message)
  res.status(200).json({
    message
  });
});

app.use('/paymentHistoryproteceted' ,auth.authenticate,async (req,res) => {
    const userId = req.user;
    //console.log(userId.id);
    var message = await payments.getPaymentsByApartmentNumber(userId.id);
    res.status(200).json({
      message
    });
  });

app.use('/register',async (req, res) => {
  var data = req.body;
  var message = await tenants.register(data);
  //console.log(message)
  res.status(200).json({
    message
  });
});


app.use('/updates' ,async (req,res) => {
  // var data = req.body;
  const hashedPassword = await auth.hashPassword('123456');
  var message = await updates.getUpdates();
  //console.log(message)
  res.status(200).json({
    message
  });
});
app.use('/createupdate' ,async (req,res) => {
  //console.log(req)
  var data = req.body;
  var message = await updates.createUpdate(data);
  res.status(200).json({
    message
  });
});


app.use('/tenants' ,async (req,res) =>{
  var data = req.body;
  var message = await tenants.getTenants();
  //console.log(message)
  res.status(200).json({
    message
  });
});


app.use('/deletetenant' ,async (req,res) =>{
  var data = req.body;
  var message = await tenants.deleteTenant(data);
  //console.log(message)
  res.status(200).json({
    message
  });
});


app.use('/paymentamount' ,async (req,res) =>{
  var data = req.body;
  console.log("paymet")
  console.log(data)
  var message = await apartments.getPaymentAmount(data.id);
  //console.log(message)
  res.status(200).json({
    message
  });
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

