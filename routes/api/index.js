var express = require("express");
var router = express.Router();
var authRoutes = require('../../controllers/authController');
var taskRoutes = require('./taskRoute');
var bidRoutes = require('./bidRoute');
var userRoutes = require('./userRoute');

//gives us the beginning of the url
router.use('/auth',authRoutes);
router.use('/task',taskRoutes);
router.use("/bid",bidRoutes);
router.use('/user',userRoutes);

router.get('/',function(req,res){
    res.render('index')
})

module.exports = router;
