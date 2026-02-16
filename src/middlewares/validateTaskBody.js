function validateTaskBody(req, res, next) {
  // Body vacío
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "Request body is empty" });
  }

  const { description, isCompleted } = req.body;

  // Atributos faltantes o inválidos
  if (
    typeof description !== "string" ||
    typeof isCompleted !== "boolean"
  ) {
    return res.status(400).json({
      message: "Invalid or missing task attributes"
    });
  }

  next();
}

module.exports = validateTaskBody;
