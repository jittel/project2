const router = require("express").Router();
const taskController = require("../../controllers/taskController");

router.route("/").get(taskController.allTask);
router.route("/:id")
    .get(taskController.singleTask)
    .put(taskController.updateTask)
    .delete(taskController.deleteTask);
router.route("/new").post(taskController.createTask);

module.exports = router;