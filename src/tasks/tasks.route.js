const { auth } = require("../middleware/auth");
const {
  createTask,
  getAllTask,
  updateTask,
  deleteTask,
  getOneTask,
  getAllTaskForUser,
} = require("./tasks.controller");

const router = require("express").Router();

router.post("/create-task", auth, createTask);
router.patch("/task/:id", auth, updateTask);
router.delete("/task/:id", auth, deleteTask);
router.get("/task/:id", auth, getOneTask);
router.get("/tasks-user", auth, getAllTaskForUser);
router.get("/tasks", auth, getAllTask);

module.exports.TaskRouter = router;
