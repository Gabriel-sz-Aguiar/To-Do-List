const express = require("express");
const tasksCotroller = require("./controllers/tasksControllers");
const tasksMiddleware = require("./middlewares/tasksMiddleware");

const router = express.Router();

router.get("/tasks", tasksCotroller.getAll);
router.post(
  "/tasks",
  tasksMiddleware.validateFieldTitle,
  tasksCotroller.createTask
);
router.delete("/tasks/:id", tasksCotroller.deleteTask);
router.put(
  "/tasks/:id",
  tasksMiddleware.validateFieldStatus,
  tasksMiddleware.validateFieldTitle,
  tasksCotroller.updateTask
);

module.exports = router;
