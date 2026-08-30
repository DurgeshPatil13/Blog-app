const express = require("express");
const app = express();
const {Router}=require("./routes/routes")
const{  connectDB}=require("./connection.js")
const PORT = 8001;
require("dotenv").config();
app.use(express.urlencoded({extended:false}));

app.use(express.json());
connectDB(process.env.MONGO_URL)
app.use("/user",Router)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});