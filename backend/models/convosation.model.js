const mongoose = require("mongoose");


const convosationSchema = new mongoose.Schema({
    participants:{
        type:[
            {
                type:mongoose.Types.ObjectId,
                ref:"User",
            }
        ]
    },
    messages:{
        type:[
            {
                type:mongoose.Types.ObjectId,
                ref:"Message",
                default:[]
            }
        ]
    }
},{timestamps:true});


const convosationModel = mongoose.model("Convasation",convosationSchema);

module.exports = convosationModel;