var express = require("express");
var sequelize = require("sequelize")

var router = express.Router();

// Import the models to use its database functions.
var db = require("../../models");

module.exports = {

    // Create all our routes and set up logic within those routes where required.
    allTask: function(req, res) {
        var query = {};
        db.Task.findAll({
            raw: true,
            where: query

        }).then(function(allTasks) {
            console.log(allTasks);

            res.json(allTasks);
            // return allTasks
        }).catch(function(err) {
            console.error(err);
        });

        // res.json('task index route!')
    },
    allUserTaskOpen: function(req, res) {
        var myDate = new Date();
        var query = {
            UserId: 1,
            include: [{
                    model: db.bid,
                    where: {
                        attributes: [
                            [sequelize.fn('min', sequelize.col('price')), 'minPrice']
                        ]
                    }
                }, { model: db.Picture }]
                // bid_close_time: {
                //     $gt: myDate,
                // },
        };
        db.Task.findAll({
            raw: true,
            where: query
        }).then(function(allUserTaskOpen) {
            console.log(allUserTaskOpen);

            res.render("userpage", {
                allUserTaskOpen
            });
        })


    },
    allUserTaskClosed: function(req, res) {
        var query = {
            UserId: 1,
            bid_close_time: { lt: toDate() }
        };
        db.Task.findAll({
            raw: true,
            where: query
        }).then(function(allUserTaskClosed) {
            console.log(allUserTaskClosed);

            res.json(allUserTaskClosed);
            // return allTasks
        });

        // res.json('task index route!')
    },


    // Get route for retrieving a single post
    singleTask: function(req, res) {
        // router.get("/:id", function (req, res) {
        db.Task.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbTask) {
            console.log(dbTask);
            res.json(dbTask);
        }).catch(function(err) {
            console.error(err);
        });
        // });
    },

    // create a task

    newTask: function(req, res) {
        db.Task.create({
            title: req.body.title,
            description: req.body.description,
            bid_end_time: req.body.bid_end_time,
            task_start: req.body.task_start,
            category: req.body.category,
            location: req.body.location,
            initial_price: req.body.initial_price

        }).then(function(dbTask) {

            res.json(dbTask);
        }).catch(function(err) {
            console.error(err);
        });
    },

    // update a task (title and description)
    updateTask: function(req, res) {
        // router.put("/:id", function (req, res) {
        db.Task.update(
            req.body, {

                where: {
                    id: req.body.id
                }
            }).then(function(dbTask) {

            res.json(dbTask);
        }).catch(function(err) {
            console.error(err);
        });
        // });
    },


    // delete a task
    deleteTask: function(req, res) {
        // router.delete("/:id", function (req, res) {
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbPost) {
            res.json(dbPost);
        }).catch(function(err) {
            console.error(err);
        });
        // });
    }
}

// Export routes for server.js to use.
// module.exports = router;