const express = require("express");
const dotenv = require("dotenv");
const cookierParser = require("cookie-parser");
dotenv.config();
const PORT = process.env.PORT || 5000;

const connectToMongoDB = require("./db/connectToMongoDB");

const authRoutes = require("./routes/auth.routes");
const messageRoutes = require("./routes/message.routes");
const userRoutes = require("./routes/user.routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookierParser());
app.use("/api/auth/",authRoutes);
app.use("/api/messages/",messageRoutes);
app.use("/api/users/",userRoutes);

app.get("/",(req,res)=>{
    res.send("Hello World!");
});

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server running on port ${PORT}`);
})