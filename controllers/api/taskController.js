var express = require("express");
var sequelize, { Op } = require("sequelize")
var moment = require("moment")

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
    },
    allUserTaskOpen: function(req, res) {
        var myDate = new Date();
        var myMoment = moment();
        var query = [{
            model: db.Bid,
            order: [
                ['bid_price', 'ASC', ]
            ],
            limit: 1,
            include: db.User
        }, { model: db.Picture }];
        return db.Task.findAll({

            where: {
                UserId: req.session.user.id,
                // UserId: 1,
                bid_end_time: {
                    [Op.gte]: myMoment
                }
            },
            include: query
        })
    },
    allUserTaskClosed: function(req, res) {
        var myDate = new Date();
        var myMoment = moment();
        var query = [{
            model: db.Bid,
            order: [
                ['bid_price', 'ASC', ]
            ],
            limit: 1,
            include: db.User
        }, { model: db.Picture }]

        ;
        return db.Task.findAll({

            where: {
                UserId: req.session.user.id,
                // UserId: 1,
                bid_end_time: {
                    [Op.lte]: myMoment
                }
            },
            include: query
        })
    },
    allUserBiddedTasksOpen: function(req, res) {
        var myDate = new Date();
        var myMoment = moment();
        return db.Task.findAll({
            where: {
                bid_end_time: {
                    [Op.gte]: myMoment
                }
            },
            include: [{
                model: db.Bid,
                where: {
                    // UserId: 1
                    UserId: req.session.user.id,
                },
                order: [
                    ['bid_price', "ASC"]
                ],
                limit: 1,
                include: db.User
            }, { model: db.Picture }],
        })
    },
    allUserBiddedTasksClosed: function(req, res) {
        var myDate = new Date();
        var myMoment = moment();
        return db.Task.findAll({
            where: {
                bid_end_time: {
                    [Op.lte]: myMoment
                }
            },
            include: [{
                model: db.Bid,
                where: {
                    // UserId: 1
                    UserId: req.session.user.id,
                },
                order: [
                    ['bid_price', "ASC"]
                ],
                limit: 1,
                include: db.User
            }, { model: db.Picture }],
        })
    },


    // Get route for retrieving a single post
    // route api/task/:id
    singleTask: function(req, res) {
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
            initial_price: req.body.initial_price,
            UserId: req.body.UserId

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
                    // id: req.body.id
                    id: 1
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