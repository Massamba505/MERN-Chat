const User = require("../models/user.model");

const getUsersForSidebar = async(req,res) => {
    try {
        const Loggeduser = req.user._id;
        const allUsers = await User.findOne({ _id : { $ne : Loggeduser} }).select("-passord");
        res.statu(200).json(allUsers);
    } catch (error) {
        console.log("error is in getUsersForSidebar controller ",error.message);
        res.statu(500).json({error:"Internal Server error"});
    }
}

module.exports = {
    getUsersForSidebar
}