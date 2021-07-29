const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const todoSchema = new Schema({
    title : {type : String, required : true},
    text : {type : String, required : false},
    status : {type : Number, default : 0}
},{
    timestamps : true
});

const todoModel = mongoose.model("todo", todoSchema);

module.exports = todoModel

