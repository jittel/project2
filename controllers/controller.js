var express = require("express");

var router = express.Router();

// Import the models to use its database functions.
var db = require("../models");

// need task title, bid price and picture on home page
// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    cat.all(function (data) {
        var hbsObject = {
            home_page: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});