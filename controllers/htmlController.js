const express = require("express");
// Requiring our models
const db = require('../models');
const router = express.Router();

const user = require("./api/userController");
const task = require("./api/taskController");
const picture = require("./api/pictureController");
const bid = require("./api/bidController");

module.exports = {
    // test page: delete after development
    testPage: function (req, res) {
        console.log('Test page route works');
        
        res.render('test');
    },

    // Home page 
    homePage: async function (req, res) {
        // const allTasks = await task.allTask(req);
        // // console.log(allTasks);
        
        // res.render("home", {
        //     allTasks
        // });

        db.Task.findAll({
            raw: true
        })
        .then(function (dbTasks) {
            db.Bid.findAll({
                raw: true
            })
            .then(function (dbBid) {
                // console.log(dbTask);
                res.render("home",{
                    dbTasks:dbTasks,
                    dbBid:dbBid});
                // res = dbTask
            });
        });
    },

    // Task page
    taskPage: function (req, res) {
        db.Task.findAll({}).then(function (dbTask) {
            console.log(dbTask);
            res.render("task", {
                dbTask
            });
        })
    },

    // User page
    userPage: function (req, res) {
        db.Task.findAll({})
            .then(dbTasks => {
                res.render("userpage", {
                    dbTasks
                });
            })
    },

    // Login page
    loginPage: function (req, res) {
        res.json("login");
    },

    // Create account page
    createAccPage: function (req, res) {
        res.render("create-acc");
    },

    // Add task page

    addTaskPage: function (req, res) {
        // db.Task.create(req.body).then(function (dbTask) {
        //     res.render("addTask", {dbTask});
        // });
        // res.render("add", {
        //     dbTasks
        // });
        // console.log(res.body)
        res.render("addTask")
    }
};