const router = require("express").Router();
const taskController = require("../../controllers/taskController");
const bidController = require("../../controllers/bidController");

router.route("/").get(taskController.allTask);
router.route("/:id")
    .get(taskController.singleTask)
    .put(taskController.updateTask)
    .delete(taskController.deleteTask);
router.route("/new").post(controller.createTask);

module.exports = router;