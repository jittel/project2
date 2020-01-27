const express = require("express");
const Sequelize = require("sequelize");
// Requiring our models
const db = require('../models');
const router = express.Router();

const user = require("./api/userController");
const task = require("./api/taskController");
const picture = require("./api/pictureController");
const bid = require("./api/bidController");

module.exports = {
    // test page: delete after development
    testPage: function(req, res) {
        console.log('Test page route works');

        res.render('test');
    },

    // Home page 
    homePage: async function(req, res) {
        // const allTasks = await task.allTask(req);
        // // console.log(allTasks);

        // res.render("home", {
        //     allTasks
        // });

        db.Task.findAll({
                raw: true
            })
            .then(function(dbTasks) {
                db.Bid.findAll({
                        raw: true
                    })
                    .then(function(dbBid) {
                        // console.log(dbTask);
                        res.render("home", {
                            dbTasks: dbTasks,
                            dbBid: dbBid
                        });
                        // res = dbTask
                    });
            });
    },

    // Task page
    taskPage: function(req, res) {
        db.Task.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbTask) {
            console.log(dbTask);
            res.render("task", {
                dbTask
            });
        })
    },

    // User page
    userPage: function(req, res) {
        var query = {
            // UserId: 1
            // bid_close_time: { gt: Sequelize.literal('CURRENT_TIMESTAMP') }
        };
        db.Task.findAll({
            raw: true,
            where: query
        }).then(function(allUserTaskOpen) {
            console.log(allUserTaskOpen);

            res.render("userpage", {
                allUserTaskOpen
            });
            // return allTasks
        });
    },

    // Login page
    loginPage: function(req, res) {
        res.json("login");
    },

    // Create account page
    createAccPage: function(req, res) {
        res.render("create-acc");
    },

    // Add task page

    addTaskPage: function(req, res) {
        res.render("add", {
            dbTasks
        });
    }
};