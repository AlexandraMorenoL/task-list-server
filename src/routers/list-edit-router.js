const express = require("express");
const router = express.Router();
let tasks = require("../data/tasks");
const validateTaskBody = require("../middlewares/validateTaskBody");

// Crear una tarea
router.post("/", validateTaskBody, (req, res) => {
  const { description } = req.body;

  const newTask = {
    id: tasks.length + 1,
    description,
    isCompleted: false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Eliminar una tarea por id
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.json({ message: "Task deleted" });
});

// Actualizar una tarea por id
router.put("/:id", validateTaskBody, (req, res) => {
  const id = Number(req.params.id);
  const { description, isCompleted } = req.body;

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.description = description ?? task.description;
  task.isCompleted = isCompleted ?? task.isCompleted;

  res.json(task);
});

module.exports = router;
