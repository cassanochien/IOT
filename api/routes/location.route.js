var express = require('express');
var router = express.Router();
var locationController = require('../controllers/location.controller')

    router.get('/',locationController.getLocations)
//router.get('/', (req,res) => {
//    res.send("Welcome")
//})

module.exports = router;    