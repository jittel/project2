  const express = require("express");
  // Requiring our models
  const db = require('../models');
  const router = express.Router();

  // *********************************************************************************
  // api-routes.js - this file offers a set of routes for displaying and saving data to the db
  // *********************************************************************************
  // Dependencies
  // =============================================================
  // Routes
  // =============================================================
  // GET route for getting all of the users
  router.get("/api/users", function(req, res) {
      db.User.findAll({}).then(function(dbUser) {
          res.json(dbUser);
      });
  });
  // Get route for retrieving a single user
  router.get("/api/users/:id", function(req, res) {
      db.User.findOne({
          where: {
              id: req.params.id
          }
      }).then(function(dbUser) {
          console.log(dbUser);
          res.json(dbUser);
      });
  });
  // POST route for saving a new user
  router.post("/api/users", function(req, res) {
      db.User.create(req.body).then(function(dbUser) {
          res.json(dbUser);
      });
  });
  // DELETE route for deleting user
  router.delete("/api/users/:id", function(req, res) {
      db.User.destroy({
          where: {
              id: req.params.id
          }
      }).then(function(dbUser) {
          res.json(dbUser);
      });
  });
  // PUT route for updating user
  router.put("/api/users", function(req, res) {
      db.User.update(
          req.body, {
              where: {
                  id: req.body.id
              }
          }).then(function(dbUser) {
          res.json(dbUser);
      });
  });

  module.exports = router;