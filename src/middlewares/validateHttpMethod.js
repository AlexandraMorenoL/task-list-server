function validateHttpMethod(req, res, next) {
  const allowedMethods = ["GET", "POST", "PUT", "DELETE"];

  if (!allowedMethods.includes(req.method)) {
    return res.status(400).json({
      message: "Invalid HTTP method"
    });
  }

  next();
}

module.exports = validateHttpMethod;
