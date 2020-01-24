const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/").get(userController.allUsers);
router.route("/:id")
    .get(userController.singleUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);
router.route("/new").post(userController.newUser);

module.exports = router;