var express = require("express");

var router = express.Router();

// Import the models to use its database functions.
var db = require("../models");


// Create all our routes and set up logic within those routes where required.
router.get("/api/task", function (req, res) {
    db.Task.all(function (data) {
        var hbsObject = {
            tasks: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// create a task
router.post("/api/task/new", function (req, res) {
    db.Task.create([
        "title", "description", "bid_end_time", "task_start", "category", "location"
    ], [
        req.body.title, req.body.description, req.body.bid_end_time, req.body.task_start, req.body.category, req.body.location
    ], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

// update a task (title and description)
router.put("/api/task/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    db.Task.update({
        title: req.body.title,
        description: req.body.description
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// delete a task
router.delete("/api/task/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    db.Task.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;