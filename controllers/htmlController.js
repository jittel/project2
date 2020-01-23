var express = require("express");

var router = express.Router();

// Import the models to use its database functions.
var db = require("../models");


router.get('/', function (req, res) {
    db.task.find({})
        .then(tasks => {

            res.render("home", {
                tasks
            });
        })
})

router.get('/task', function (req, res) {
    db.task.find({})
        .then(tasks => {

            res.render("task", {
                tasks
            });
        })
})

router.get('/user', function (req, res) {
    db.task.find({})
        .then(tasks => {

            res.render("userpage", {
                tasks
            });
        })
})

router.get('/login', function (req, res) {

    res.render("login");

})

router.get('/create-acc', function (req, res) {

    res.render("create-acc");

})

router.get('/add', function (req, res) {
    db.task.find({})
        .then(tasks => {

            res.render("add", {
                tasks
            });
        })
})

module.exports = router;