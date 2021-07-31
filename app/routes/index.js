const { Router } = require("express");
const router = Router();
const homeController = require("./../http/controllers/home");
const todoController = require("./../http/controllers/todoController");
const todoRoutes = require("./todo");
router.get("/", todoController.todos)
router.use(todoRoutes)
module.exports = router;