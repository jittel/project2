var express = require("express");

var router = express.Router();

// Import the models to use its database functions.
var db = require("../models");

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