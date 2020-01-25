const express = require("express");


var router = express.Router();
const taskController = require("../../controllers/taskController");
const bidController = require("../../controllers/bidController");


// Import the models to use its database functions.
const db = require("../models");


module.exports = {
    // Home page 
    singleTaskPage: function (req, res) {
        taskController.singleTask()
        bidController.allBids()
    }
}
// test page 
router.get('/test', function (req, res) {

    res.render('test');
    // res.json("home");
})

// Task page
router.get('/task/:id', function (req, res) {
    db.Task.findAllOne({
        where: {
            id: req.params.id
        }
    }).then(function (dbTask) {
        console.log(dbTask);
        res.render("task", {
            dbTask
        });
    })
})

// User page
router.get('/user', function (req, res) {
    db.Task.findAll({})
        .then(dbTasks => {

            res.render("userpage", {
                dbTasks
            });
        })
})

// Login page
router.get('/login', function (req, res) {

    res.json("login");

})

// Create account page
router.get('/create-acc', function (req, res) {

    res.render("create-acc");

})

// Add task page

router.get('/add', function (req, res) {
    res.render("add", {
        dbTasks
    });


module.exports = router;