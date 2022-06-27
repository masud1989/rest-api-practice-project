const ProfileModel = require("../models/ProfileModel");
const jwt = require('jsonwebtoken');

exports.CreateProfile = (req,res) => {
    const reqBody = req.body;
    ProfileModel.create(reqBody, (error,data) => {
        if(error){
            res.status(400).json({status:"Failed", data:error})
        }
        else{
            res.status(200).json({status:"Success", data:data})
        }
    })

}
exports.UserLogin = (req,res) => {
    const UserName = req.body['UserName'];
    const Password = req.body['Password'];
    // res.status(200).json({status:"Success", data:UserName})
    // res.status(200).json({status:"Success", data:Password})
    ProfileModel.find({UserName:UserName, Password:Password}, (error,data)=>{
        if(error){
            res.status(400).json({status:"Failed", data:error})
        }
        else{
            if( data.length>0 ){
                const payLoad = {exp:Math.floor(Date.now()/1000)+(24*60*60), data:data[0]}
                const token = jwt.sign(payLoad, "SecretKey");
                res.status(200).json({status:"Success", token:token, data:data})
            }
            else{
                res.status(401).json({status:"Unauthorized"})
            }
        }
    })
    
}
