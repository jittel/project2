const express = require("express");

const router = express.Router();

// Import the models to use its database functions.
const db = require("../models");


// Home page 
router.get('/', function(req, res) {
    db.Task.findAll({ raw: true })
            .then(dbTasks => {
                res.render('home', {
                
                    dbTasks
                });
                // res.json(dbTasks)
            })
            // res.render('home'); 
    })



    // test page 
router.get('/test', function(req, res) {

    res.render('test');
    // res.json("home");
})

// Task page
router.get('/task/:id', function(req, res) {
    db.Task.findAllOne({
        where: {
            id: req.params.id
        }
    }).then(function(dbTask) {
        console.log(dbTask);
        res.render("task", {
            dbTask
        });
    })
})

// User page
router.get('/user', function(req, res) {
    db.Task.findAll({})
        .then(dbTasks => {

            res.render("userpage", {
                dbTasks
            });
        })
})

// Login page
router.get('/login', function(req, res) {

    res.json("login");

})

// Create account page
router.get('/create-acc', function(req, res) {

    res.render("create-acc");

})

// Add task page
router.get('/addtask', function(req, res) {
    res.render("addTask");
})

module.exports = router;