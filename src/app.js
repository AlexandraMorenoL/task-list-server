const express = require("express");
const app = express();

const listViewRouter = require("./routers/list-view-router");
const listEditRouter = require("./routers/list-edit-router");
const validateHttpMethod = require("./middlewares/validateHttpMethod");

app.use(express.json());

// Middleware global
app.use(validateHttpMethod);

// Routers
app.use("/tasks", listViewRouter);
app.use("/tasks", listEditRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
