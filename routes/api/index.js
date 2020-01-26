var express = require("express");
var router = express.Router();
var authRoutes = require('../../controllers/api/authController');
var taskRoutes = require('./taskRoute');
var bidRoutes = require('./bidRoute');
var userRoutes = require('./userRoute');

// route to this point: /api
// router.use('/auth',authRoutes);
router.use('/task',taskRoutes);
router.use("/bid",bidRoutes);
router.use('/user',userRoutes);

// broken route
// router.get('/',function(req,res){
//     res.render('index')
// })

module.exports = router;
