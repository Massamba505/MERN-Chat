const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required: true
    },
    username:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true,
        minLength:6
    },
    gender:{
        type:String,
        required: true,
        emun:["male","female"]
    },
    profilePic:{
        type:String,
        default:""
    }
},{timestamps:true});

const UserModel = mongoose.model("User",userSchema);

module.exports = UserModel;