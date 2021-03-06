const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    Email:{type:String, unique:true},
    MobileNo:{type:String},
    Address:{type:String},
    UserName:{type:String, unique:true},
    Password:{type:String},
}, {versionKey: false})

const ProfileModel = mongoose.model('profiles',dataSchema);

module.exports = ProfileModel;