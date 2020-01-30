var express = require("express");
var router = express.Router();
var db = require('../../models');
const bcrypt = require('bcryptjs');


//get route for secret clubhouse, if logged in will elt you in, otherwise will fail
router.get('/secret', function (req, res) {
    if (req.session.user) {
        res.render('securepage', req.session.user);
    } else {
        res.send('log in first')
    }
})
//get route to retrieve all users info, only for dev, remove from production
router.get('/allUsers', function (req, res) {
    db.User.findAll().then(function (users) {
        res.json(users);
    })
})

//loads signup form with handlebars
router.get('/signup', function (req, res) {
    res.render('create-acc'); // this should be whatever file we have as sign up. handlebars or whatever
})

//creates new instance of user
router.post('/signup', function (req, res) {
    db.User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }).then(function (newUser) {
        res.json(newUser);
    }).catch(function (error) {
        console.error(error);
        res.json({
            success: false,
            message: error.message
        })
    })
})

//loads login form from handlebars file
router.get('/login', function (req, res) {
    res.render('login') // this should be whatever file we have as sign in. handlebars or whatever
})

//route for user login
router.post('/login', function (req, res) {
    db.User.findOne({
        where: {
            username: req.body.username
        }
    }).then(function (dbUser) {
        //compares password send in req.body to one in database, will return true if matched.
        if (!dbUser) {
            res.json({ loggedIn: false })
        }
        else if (bcrypt.compareSync(req.body.password, dbUser.password)) {
            //create new session property "user", set equal to logged in user
            req.session.user = { username: dbUser.username, id: dbUser.id };
            // save the user id to local storage
            res.json({ loggedIn: true })
        }
        else {
            //delete existing user session, add error
            req.session.user = false;
            req.session.error = 'auth failed'
            res.json({ loggedIn: false });
        }
        // res.json(dbUser.id)
        // res.json(dbUser.username)
        // var id = dbUser.id;
        // localStorage.setItem("id", JSON.stringify(id));
        // console.log(res.sessions.user);
    })
})

router.get('/logout', function (req, res) {
    //delete session user, logging you out
    req.session.destroy(function () {
        // res.send('successfully logged out')
        res.render("home");
    })
})

//developer route to see all the session variables.
router.get('/readsessions', function (req, res) {
    res.json(req.session);
})

module.exports = router;