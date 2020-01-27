const express = require("express");
const sequelize = require("sequelize");
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
        var query = [{
            model: db.Bid,
            order: [
                ['bid_price', 'ASC', ]
            ],
            limit: 1
        }, { model: db.Picture }];
        db.Task.findAll({
            include: query
        }).then(function(allUserTaskOpen) {
            // const raw = [];
            // for (let i = 0; i < allUserTasksOpen.length; i++) {
            //     raw.push(allUserTaskOpen[i].get({ plain: true }))
            // }
            const rawData = allUserTaskOpen.map(seqObj => seqObj.get({ plain: true }))
            console.log(rawData);
            // res.json(rawData)
            res.render("home", {
                rawData
            });
        }).catch(err => console.log(err))
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
    userPage: function(req, res) {
        var myDate = new Date();
        var query = [{
                model: db.Bid,
                order: [
                    ['bid_price', 'ASC', ]
                ],
                limit: 1
            }, { model: db.Picture }]
            // bid_close_time: {
            //     $gt: myDate,
            // },
        ;
        db.Task.findAll({

            where: { UserId: 1 },
            include: query
        }).then(function(allUserTaskOpen) {
            // const raw = [];
            // for (let i = 0; i < allUserTasksOpen.length; i++) {
            //     raw.push(allUserTaskOpen[i].get({ plain: true }))
            // }
            const rawData = allUserTaskOpen.map(seqObj => seqObj.get({ plain: true }))
            console.log(rawData);
            // res.json(rawData)
            res.render("userpage", {
                rawData
            });
        }).catch(err => console.log(err))
    },

    // Login page
    loginPage: function (req, res) {
        res.render("login");
    },

    // Create account page
    createAccPage: function(req, res) {
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