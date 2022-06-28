const TodoListModel = require("../models/TodoListModel");
// const jwt = require('jsonwebtoken');

exports.CreateTodo = (req,res) => {
    const reqBody = req.body;
    const TodoSubject = reqBody['TodoSubject'];
    const TodoDescription = reqBody['TodoDescription'];
    const UserName = req.headers['username'];
    const TodoStatus = "New";
    const TodoCreateDate = Date.now();
    const TodoUpdateDate = Date.now();

    const postBody = {
        UserName:UserName,
        TodoSubject:TodoSubject,
        TodoDescription:TodoDescription,
        TodoStatus:TodoStatus,
        TodoCreateDate:TodoCreateDate,
        TodoUpdateDate:TodoUpdateDate
    }


    TodoListModel.create(postBody, (error,data) => {
        if(error){
            res.status(400).json({status:"Failed", data:error})
        }
        else{
            res.status(200).json({status:"Todo Create Success", data:data})
        }
    })

}

exports.SelectTodo = (req,res) => {
    const UserName = req.headers["username"];
    TodoListModel.find({UserName:UserName}, (error,data)=>{
        if(error){
            res.status(400).json({status:"Failed", data:error})
        }
        else{
            res.status(200).json({status:"Success", data:data})
        }
    })
}

exports.UpdateTodo = (req,res) => {
    const TodoSubject = req.body["TodoSubject"];
    const TodoDescription = req.body["TodoDescription"];
    const _id = req.body['_id'];
    const TodoUpdateDate = Date.now();

    const postBody = {
        TodoSubject:TodoSubject,
        TodoDescription:TodoDescription,
        TodoUpdateDate:TodoUpdateDate
    }

    TodoListModel.updateOne({_id:_id}, {$set:postBody}, {upsert:true}, (error,data)=>{
        if(error){
            res.status(400).json({status:"Failed", data:error})
        }
        else{
            res.status(200).json({status:"Success", data:data})
        }
    })
}

