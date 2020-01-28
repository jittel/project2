const express = require("express");
var sequelize, { Op } = require("sequelize")
var moment = require("moment")
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
        var distinctTaskFromBidOpen = bid.distinctTaskFromBidOpen
        var distinctTaskFromBidClosed = bid.distinctTaskFromBidClosed


        distinctTaskFromBidClosed().then(function(distinctTaskdata) {
            res.json(distinctTaskdata)
        }).catch(err => console.log(err));
    },

    // Home page 
    homePage: async function(req, res) {
        var myDate = new Date();
        var myMoment = moment();


        var query = [{
            model: db.Bid,
            order: [
                ['bid_price', 'ASC', ]
            ],
            limit: 1
        }, {
            model: db.Picture
        }];
        db.Task.findAll({

            where: {
                bid_end_time: {
                    [Op.gte]: myMoment
                }
            },
            include: query
        }).then(function(allUserTaskOpen) {
            // const raw = [];
            // for (let i = 0; i < allUserTasksOpen.length; i++) {
            //     raw.push(allUserTaskOpen[i].get({ plain: true }))
            // }
            const rawData = allUserTaskOpen.map(seqObj => seqObj.get({
                plain: true
            }))
            console.log(rawData);
            // res.json(rawData)
            res.render("home", {
                rawData
            });
        }).catch(err => console.log(err))
    },

    // Task page

    taskPage: async function(req, res) {
        var query = [{
            model: db.Bid,
            order: [
                ['bid_price', 'ASC', ]
            ],
            limit: 1
        }, {
            model: db.Picture
        }];
        db.Task.findOne({
            where: {
                id: req.params.id
            },
            include: query
        }).then(function(allUserTaskOpen) {
            const rawData = allUserTaskOpen.get({
                plain: true
            })
            console.log(rawData);
            res.render("task", {
                rawData
            });
        }).catch(err => console.log(err))
    },

    // User page
    userPage: function(req, res) {
        var allUserTaskOpen = task.allUserTaskOpen
        var allUserTaskClosed = task.allUserTaskClosed
        var allUserBiddedTasksOpen = task.allUserBiddedTasksOpen
        var allUserBiddedTasksClosed = task.allUserBiddedTasksClosed

        // console.log(allUserTaskOpen);

        // Promise.all([allUserTaskOpen, allUserTaskClosed])
        allUserTaskOpen()
            .then(function(allUserTaskOpenRes) {
                allUserTaskClosed()
                    .then(function(allUserTaskClosedRes) {
                        allUserBiddedTasksOpen()
                            .then(function(distinctTaskFromBidOpenRes) {
                                distinctTaskFromBidOpenRes = distinctTaskFromBidOpenRes.filter(entry => {
                                    return entry.Bids.length
                                })

                                allUserBiddedTasksClosed()
                                    .then(function(distinctTaskFromBidClosedRes) {
                                        distinctTaskFromBidClosedRes = distinctTaskFromBidClosedRes.filter(entry => {
                                            return entry.Bids.length
                                        })



                                        // const raw = [];
                                        // for (let i = 0; i < allUserTasksOpen.length; i++) {
                                        //     raw.push(allUserTaskOpen[i].get({ plain: true }))
                                        // }
                                        const rawOpenData = allUserTaskOpenRes.map(seqObj => seqObj.get({ plain: true }))
                                        const rawClosedData = allUserTaskClosedRes.map(seqObj => seqObj.get({ plain: true }))
                                        const rawDistinctOpenData = distinctTaskFromBidOpenRes.map(seqObj => seqObj.get({ plain: true }))
                                        const rawDistinctClosedData = distinctTaskFromBidClosedRes.map(seqObj => seqObj.get({ plain: true }))
                                            // console.log({ rawOpenData, rawClosedData, rawDistinctOpenData, rawDistinctClosedData });



                                        // const {...tasksOpen } = rawDistinctOpenData;
                                        // console.log((rawDistinctOpenData));
                                        // const distinctOpenArr = [];
                                        // for (const task in tasksOpen) {
                                        //     distinctOpenArr.push(tasksOpen[task].Task);
                                        //     // console.log(tasks[task].Task);
                                        // }
                                        // const {...tasksClosed } = rawDistinctClosedData;
                                        // console.log((rawDistinctClosedData));
                                        // const distinctClosedArr = [];
                                        // for (const task in tasksClosed) {
                                        //     distinctClosedArr.push(tasksClosed[task].Task);
                                        //     // console.log(tasks[task].Task);
                                        // }



                                        // res.json({
                                        //         rawOpenData,
                                        //         rawClosedData,
                                        //         rawDistinctOpenData,
                                        //         rawDistinctClosedData
                                        //     })
                                        res.render("userpage", {
                                            rawOpenData,
                                            rawClosedData,
                                            rawDistinctOpenData,
                                            rawDistinctClosedData
                                        })
                                    })
                            })
                    });
            }).catch(err => console.log(err))

    },

    // Login page
    loginPage: function(req, res) {
        res.render("login");
    },

    // Create account page
    createAccPage: function(req, res) {
        res.render("create-acc");
    },

    // Add task page


    addTaskPage: function(req, res) {
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