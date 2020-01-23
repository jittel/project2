var express = require("express");

var router = express.Router();

// Import the models to use its database functions.
var db = require("../models");


router.get('/',function(req,res){
    res.render('index');
})

module.exports = router;