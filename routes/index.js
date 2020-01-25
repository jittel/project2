var express = require("express");
var router = express.Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./htmlRoute');

router.use('/api',apiRoutes);
router.use('/api',htmlRoutes);

module.exports = router