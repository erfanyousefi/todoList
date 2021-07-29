const controller = require("./controller");
const todoModel = require("./../../models/todo");
class todoController extends controller{
    saveTodo(req, res){
        todoModel.create({...req.body},(err, todo) => {
            if(todo){
                res.json({
                    message : "insert done."
                })
            }else{
                res.json({
                    message : "insert failed!"
                })
            }
        })
    }
}
module.exports = new todoController();