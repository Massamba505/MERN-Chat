const express = require("express");
const router = express.Router();
const {protectRoute} = require("../Middleware/protectRoute");

const {getUsersForSidebar} = require("../controllers/users.controller");

router.get("/",protectRoute,getUsersForSidebar);


module.exports = router;