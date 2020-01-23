var express = require("express");

var router = express.Router();

// Import the models to use its database functions.
var db = require("../models");


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    var query = {};
    db.Task.findAll({
        where: query
    }).then(function (dbTask) {
        res.json(dbTask);
    });
    // res.json('task index route!')
});

// Get route for retrieving a single post
router.get(":id", function (req, res) {
    db.Task.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (dbTask) {
        console.log(dbTask);
        res.json(dbTask);
    });
});

// create a task
router.post("/new", function (req, res) {
    db.Task.create(req.body).then(function (dbTask) {
        res.json(dbTask);
    });
});

// update a task (title and description)
router.put("/api/task/:id", function (req, res) {
    db.Task.update(
        req.body,
        {
            where: {
                id: req.body.id
            }
        }).then(function (dbTask) {
            res.json(dbTask);
        });
});

// delete a task
router.delete("/api/task/:id", function (req, res) {
    db.Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbPost) {
        res.json(dbPost);
    });
});

// Export routes for server.js to use.
module.exports = router;