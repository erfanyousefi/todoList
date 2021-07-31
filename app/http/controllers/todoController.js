const controller = require("./controller");
const todoModel = require("./../../models/todo");
let messages = {};
class todoController extends controller {
    async todos(req, res) {
        const todos = await todoModel.find({})
        res.render("home/index", {
            messages,
            route : "/",
            todos
        })
        messages = {}
    }
    createFormTodo(req, res) {
        res.render("home/todo/create", {
            messages,
            route : "/todo/insert"
        })
        messages = {}
    }
    saveTodo(req, res) {
        todoModel.create({ ...req.body }, (err, todo) => {
            if (todo) {
                messages.success = "save todo done."
                this.back(req, res);
            } else {
                messages.error = "insert failed!"
                this.back(req, res);
            }
        })
    }

}
module.exports = new todoController();