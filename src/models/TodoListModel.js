const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    UserName:{type:String},
    TodoSubject:{type:String},
    TodoDescription:{type:String},
    TodoStatus:{type:String},
    TodoCreateDate:{type:Date},
    TodoUpdateDate:{type:Date}

}, {versionKey: false})

const TodoListModel = mongoose.model('TodoList',dataSchema);

module.exports = TodoListModel;