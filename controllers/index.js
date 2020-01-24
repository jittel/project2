var express = require("express");
var router = express.Router();
var authRoutes = require('./authController');
var taskRoutes = require('./taskController');
var bidRoutes = require('./bidController');
var userRoutes = require('./authController');
//appends "/auth/" to all routes imported from authorization.js
router.use('/auth',authRoutes);
router.use('/api/task',taskRoutes);
router.use("/api/bid",bidRoutes);
router.use('/api/user',userRoutes);

router.get('/',function(req,res){
    res.render('index')
})

module.exports = router;
