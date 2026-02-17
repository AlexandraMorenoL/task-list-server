const express = require("express");
const router = express.Router();
const tasks = require("../data/tasks");
const validateTaskParams = require("../middlewares/validateTaskParams");

// 1. Listar todas las tareas
router.get("/", (req, res) => {
  res.json(tasks);
});

// 2. Ver una tarea específica (por id)
router.get("/:id", validateTaskParams, (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});

// 3. Filtrar por tareas completas o incompletas
router.get("/filter/:status", validateTaskParams, (req, res) => {
  const status = req.params.status === "true";
  const filteredTasks = tasks.filter(t => t.isCompleted === status);
  res.json(filteredTasks);
});

module.exports = router;
