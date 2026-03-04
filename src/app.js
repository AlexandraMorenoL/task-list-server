require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();

const listViewRouter = require("./routers/list-view-router");
const listEditRouter = require("./routers/list-edit-router");
const validateHttpMethod = require("./middlewares/validateHttpMethod");

const users = [
  {id:1, username: "admin", password: "1234"},
  {id:2, username: "user", password: "4321"}
];

const validateToken = require("./middlewares/validateToken");
app.get("/protected", validateToken, (req, res) => {
  res.json({ 
    message: "Access granted to protected route", 
    user: req.user 
  });
});


app.use(express.json());

// Middleware global
app.use(validateHttpMethod);

// Routers
app.use("/tasks", listViewRouter);
app.use("/tasks", listEditRouter);

app.post ("/login", (req, res) => {
  const { username, password } = req.body;

//Validar body
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }

  //Buscar usuario
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) { 
    return res.status(401).json({ error: "Invalid credentials" });
  }

  //Crear token 
  const token = jwt.sign({ id: user.id, username: user.username }, 
    process.env.JWT_SECRET, 
    { expiresIn: "1h" }
  );
  res.json({ token });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
