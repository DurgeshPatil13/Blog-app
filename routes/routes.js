const express=require("express")
const {createuser,loginreq,deletepost,updatepost,displayonepost,profileinfo,postscreation,displayposts}=require("../controllers/usercontrols")
const{validateprofile}=require("../middleware/middle")
const Router=express.Router();
Router.post("/signup",createuser)
Router.post("/login",loginreq)
Router.get("/profile",validateprofile,profileinfo)
Router.post("/posts",validateprofile,postscreation)
Router.get("/posts",displayposts)
Router.get("/posts/:id",displayonepost)
Router.patch("/posts/:id",validateprofile,updatepost)
Router.delete("/posts/:id",validateprofile,deletepost)
module.exports={
    Router
}