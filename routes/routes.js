const express=require("express")
const {createuser,loginreq}=require("../controllers/usercontrols")

const Router=express.Router();
Router.post("/signup",createuser)
Router.post("/login",loginreq)
module.exports={
    Router
}