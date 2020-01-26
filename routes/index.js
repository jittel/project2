var express = require("express");
var router = express.Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./html/htmlRoute');

router.use('/api',apiRoutes);
router.use('/',htmlRoutes);

module.exports = router