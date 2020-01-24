var express = require("express");
var router = express.Router();
const apiRoutes = require('./api');

router.use('/api',apiRoutes);

module.exports = router