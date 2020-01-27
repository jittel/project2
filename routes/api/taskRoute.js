const router = require("express").Router();
const taskController = require("../../controllers/api/taskController");

router.route("/").get(taskController.allTask);
router.route("/new").post(taskController.newTask);
router.route("/:id")
    .get(taskController.singleTask)
    .put(taskController.updateTask)
    .delete(taskController.deleteTask);

module.exports = router;