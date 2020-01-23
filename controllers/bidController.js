var express = require("express");

var router = express.Router();


// Import the models to use its database functions.
var db = require("../models");


// Create all our routes and set up logic within those routes where required.
router.get("/bid", function (req, res) {
    db.Bid.all(function (data) {
        var hbsObject = {
            bid: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// create a bid
router.post("/api/bid/new", function (req, res) {
    db.Bid.create([
        "bid_price", "awarded"
    ], [
        req.body.bid_price, req.body.awarded
    ], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

// update a bid
router.put("/api/bid/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    db.Bid.update({
        bid_price: req.body.bid_price,
        awarded: req.body.awarded
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// delete a bid
router.delete("/api/bid/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    db.Bid.delete(condition, function (result) {
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