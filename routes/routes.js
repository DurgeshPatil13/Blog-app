const express=require("express")
const {createuser}=require("../controllers/usercontrols")
const Router=express.Router();
Router.post("/signup",createuser)
module.exports={
    Router
}