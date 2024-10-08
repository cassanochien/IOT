const express = require('express')
const app = express()
require('dotenv').config()
var cors = require('cors')
const mongoose = require('mongoose');

MONGODB_URL='mongodb+srv://chien100224:<chien100224>@chienapi.rhbpl.mongodb.net/?retryWrites=true&w=majority&appName=ChienAPI'
mongoose.connect(
  MONGODB_URL,
  {useNewUrlParser: true, useUnifiedTopology: true},
  () => {
    console.log('Connected to MongoDB!');
  },
);

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())

const locationRoute = require('./api/routes/location.route');
app.use("/v1/api/location",locationRoute);

// app.get('/', function (req, res) { 
//  res.send('Minh la Chien') 
//})
app.listen(process.env.PORT)