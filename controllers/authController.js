var express = require("express");
var router = express.Router();
var db = require('../models');
const bcrypt = require('bcryptjs');

//get route for secret clubhouse, if logged in will elt you in, otherwise will fail
router.get('/secret',function(req,res){
    if(req.session.user) {
        res.render('securepage',req.session.user);
    }else {
        res.send('log in first')
    }
})
//get route to retrieve all users info, only for dev, remove from production
router.get('/allUsers',function(req,res){
    db.User.findAll().then(function(users){
        res.json(users);
    })
})

//loads signup form
router.get('/signup',function(req,res){
    res.render('signup');
})

//creates new instance of user
router.post('/signup',function(req,res){
    console.log(req.body)
    db.User.create({
        username:req.body.username,
        password:req.body.password,
        email: req.body.email
    }).then(function(newUser){
        console.log(newUser)
        res.json(newUser);
    }).catch(function(error){
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    })
})

//loads login form
router.get('/login',function(req,res){
    res.render('login')
})

//route for user login
router.post('/login',function(req,res){
    db.User.findOne({
        where:{
            name:req.body.name
        }}).then(function(dbUser){
            //compares password send in req.body to one in database, will return true if matched.
        if(bcrypt.compareSync(req.body.password,dbUser.password)) {
            //create new session property "user", set equal to logged in user
            req.session.user = {name:dbUser.name,id:dbUser.id};
        }
        else {
            //delete existing user session, add error
            req.session.user= false;
            req.session.error = 'auth failed'
        }
        res.json(req.session);
    })
})

router.get('/logout',function(req,res){
    //delete session user, logging you out
    req.session.destroy(function(){
        res.send('successfully logged out')
    })
})

//developer route to see all the session variables.
router.get('/readsessions',function(req,res){
    res.json(req.session);
})

module.exports = router;