const mongoose = require("mongoose");


const messageSchema = new mongoose.Schema({
    senderId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required: true
    },
    receiverId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required: true
    },
    message:{
        type:"String",
        required:true
    }
},{timestamps:true});

const userModel = mongoose.model("Message",messageSchema);

module.exports = userModel;