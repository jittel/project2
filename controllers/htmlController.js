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
        res.render('test');
    },

    // Home page 
    homePage: function (req, res) {
        const allTask = task.allTask();
        res.render("task", {
            allTask
        });
    },

    // Task page
    taskPage: function (req, res) {
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
        res.render("add", {
            dbTasks
        });
    }
};