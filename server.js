// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
//using express-session to enable session storage for our server
var session = require("express-session");
require('dotenv').config();
console.log(process.env.SESSION_SECRET)

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
//imports entire controllers folder, we will handle moularization there
var allRoutes = require('./controllers');

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
//initializing sessions on our server, basically boilerplate
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true,cookie:{maxAge: 7200000} }));

// Routes
// =============================================================

app.use('/',allRoutes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
