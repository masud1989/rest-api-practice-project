const ProfileModel = require("../models/ProfileModel");

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