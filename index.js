const express = require('express')
const app = express()
require('dotenv').config()
var cors = require('cors')
const mongoose = require('mongoose');

await mongoose.connect('mongodb+srv://chien100224:<chien100224>@chienapi.rhbpl.mongodb.net/?retryWrites=true&w=majority&appName=ChienAPI')
.then(() => {
    console.log('Connected to mongodb');
})


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))


// parse application/json
app.use(bodyParser.json())
app.use(cors())


app.get('/', function (req, res) {
  res.send('Hello NodeJS')
})

app.listen(process.env.PORT)