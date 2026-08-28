const express = require("express");
const app = express();
const{  connectDB}=require("./connection.js")
const PORT = 8001;
require("dotenv").config();
app.use(express.json());
connectDB(process.env.MONGO_URL)
app.get("/", (req, res) => {
    res.json("Blog API is running");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})