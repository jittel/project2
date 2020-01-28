const router = require("express").Router();
const htmlController = require("../../controllers/htmlController");

router.route("/").get(htmlController.homePage);
router.route("/task/:id").get(htmlController.taskPage);
router.route("/user/:id").get(htmlController.userPage);
router.route("/add-task").get(htmlController.addTaskPage);
router.route("/login").get(htmlController.loginPage);
router.route("/create-acc").get(htmlController.createAccPage);
// Test page. delete after development 
router.route("/test").get(htmlController.testPage);


module.exports = router;