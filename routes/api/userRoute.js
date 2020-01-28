const router = require("express").Router();
const userController = require("../../controllers/api/userController");

// route to this point: /user
router.route("/").get(userController.allUsers);
router.route("/:username").get(userController.userName);
router.route("/:id")
    .get(userController.singleUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);
router.route("/new").post(userController.newUser);

module.exports = router;