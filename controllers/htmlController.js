const express = require("express");
const db = require('../models');
const router = express.Router();

router.get('/',function(req,res){
    res.render('index');
})

module.exports = router;