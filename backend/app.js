const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const todoRouter = require("./routes/todo");
const todoController = require("./controllers/todo")
const todoModel = require("./models/todo")

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api/create", todoController.createOne)
app.get("/api/allTodos", todoController.getAll)
app.put("/api/changeTodo/:id", todoController.update) 
app.delete("/api/deleteTodo/:id", todoController.delete)

module.exports = app;
