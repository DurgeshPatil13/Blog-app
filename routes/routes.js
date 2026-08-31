const express=require("express")
const {createuser,loginreq,profileinfo}=require("../controllers/usercontrols")
const{validateprofile}=require("../middleware/middle")
const Router=express.Router();
Router.post("/signup",createuser)
Router.post("/login",loginreq)
Router.get("/profile",validateprofile,profileinfo)
module.exports={
    Router
}