const {Router} = require("express")
const router = Router();
const todoController = require("./../http/controllers/todoController")
router.get("/todo/insert", todoController.createFormTodo);
router.post("/todo/insert", todoController.saveTodo);
module.exports = router;