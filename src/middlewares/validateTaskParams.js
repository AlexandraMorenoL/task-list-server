function validateTaskParams(req, res, next) {
  const { id, status } = req.params;

  // Validar id (si existe)
  if (id && isNaN(Number(id))) {
    return res.status(400).json({
      message: "Invalid task id"
    });
  }

  // Validar status (si existe)
  if (status && status !== "true" && status !== "false") {
    return res.status(400).json({
      message: "Invalid status parameter"
    });
  }

  next();
}

module.exports = validateTaskParams;
