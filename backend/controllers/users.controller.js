const User = require("../models/user.model");

const getUsersForSidebar = async (req, res) => {
    try {
        const Loggeduser = req.user._id;

        const allUsers = await User.find({ _id: { $ne: Loggeduser } }).select("-password");

        res.status(200).json(allUsers);
    } catch (error) {
        console.log("Error in getUsersForSidebar controller: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


module.exports = {
    getUsersForSidebar
}