var express = require("express");

var router = express.Router();

// Import the models to use its database functions.
var db = require("../../models");

module.exports = {

    // Create all our routes and set up logic within those routes where required.
    allBids: function(req, res) {
        // router.get("/", function (req, res) {
        var query = {};
        db.Bid.findAll({
            where: query
        }).then(function(dbBid) {
            res.json(dbBid);
        });
        // res.json('task index route!')
        // });
    },

    // Get route for retrieving a single post
    singleBid: function(req, res) {
        // router.get(":id", function (req, res) {
        db.Bid.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbBid) {
            console.log(dbBid);
            res.json(dbBid);
        });
        // });
    },

    // create a bid
    newBid: function(req, res) {
        // router.post("/new", function (req, res) {
        db.Bid.create(req.body).then(function(dbBid) {
            res.json(dbBid);
        });
        // });
    },

    // update a bid
    updateBid: function(req, res) {
        // router.put("/:id", function (req, res) {
        db.Bid.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function(dbBid) {
            res.json(dbBid);
        });
        // });
    },

    // delete a bid
    deleteBid: function(req, res) {
        // router.delete("/:id", function (req, res) {
        db.Bid.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbBid) {
            res.json(dbBid);
        });
        // });
    }
}

// Export routes for server.js to use.
// module.exports = router;