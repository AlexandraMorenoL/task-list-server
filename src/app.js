const express = require("express");
const app = express();

const listViewRouter = require("./routers/list-view-router");
const listEditRouter = require("./routers/list-edit-router");

app.use(express.json());

// Routers
app.use("/tasks", listViewRouter);
app.use("/tasks", listEditRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
