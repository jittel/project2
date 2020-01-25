const router = require("express").Router();
const taskController = require("../../controllers/api/taskController");

router.route("/").get(taskController.allTask);
router.route("/:id")
    .get(taskController.singleTask)
    .put(taskController.updateTask)
    .delete(taskController.deleteTask);
router.route("/new").post(taskController.newTask);

module.exports = router;