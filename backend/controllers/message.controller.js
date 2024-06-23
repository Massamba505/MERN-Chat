const Convosation = require("../models/convosation.model");
const Message = require("../models/message.model");

const sendMessage = async(req,res)=>{
    try {
        const {message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;

        let convosation = await Convosation.findOne({
            participants:{$all:[senderId,receiverId]}
        });

        if(!convosation){
            convosation = new Convosation({
                participants: [senderId,receiverId]
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if(newMessage){
            convosation.messages.push(newMessage._id);
        }

        await Promise.all([convosation.save(),newMessage.save()]); // this does things in parallel
        // await newMessage.save();
        // await convosation.save();
        res.status(201).json(newMessage);
    } catch (error) {
        console.log("error in send message controller", error.message);
        res.status(500).json({error:"Internal server error"});
    }
}

const getMessage = async(req,res)=>{
    try {
        const {id:userToChat} = req.params;
        const senderId = req.user._id;

        const convosation = await Convosation.findOne({
            participants:{$all:[senderId,userToChat]}
        }).populate("messages"); // poplulate gives you every message as a message object not reference _id
        
        if(!convosation){
            return res.status(200).json([]);
        }

        const messages = convosation.messages
        
        res.status(200).json(messages);
    } catch (error) {
        console.log("error in send message controller", error.message);
        res.status(500).json({error:"Internal server error"});
    }
}

module.exports = {
    sendMessage,
    getMessage
}