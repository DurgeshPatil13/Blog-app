const {user,posts}=require("../models/user")
const bcrypt=require("bcrypt");

  const jwt=require("jsonwebtoken")
require("dotenv").config()

// user creation
async function createuser(req,res) {
    const hashpass=await bcrypt.hash(req.body.password,10)
   try{ const User=await user.create({
        name:req.body.name,
        email:req.body.email,
        password:hashpass,
    })
    return res.json(User)
}
    catch(err){
res.status(404).send("error creating user")
    }

}

// login request
async function loginreq(req,res) {
 const finduser=await user.findOne({email:req.body.email})
if(!finduser){
  return  res.status(404).send("user not found")
}

const valid=await bcrypt.compare(req.body.password,finduser.password)
if(!valid){
  return  res.send("incorrect password")
}
const token=jwt.sign({
  userid:finduser._id
},process.env.secret,    {
        expiresIn: "1d"
    })
    res.cookie("token", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
});
    return res.json({
  message:"success",
 
})
}

// profile access
async function profileinfo(req,res) {
  return res.json({
    message:"you can access profile",
  })
}


// posts creation
async function postscreation(req,res) {
  const postcreate=await posts.create({
title:req.body.title,
content:req.body.content,
author:req.userId
  })
  return res.json(postcreate)
}
// posts display
async function displayposts(req,res) 
{
const allposts=await posts.find()
res.send(allposts)  
}

// display one post
async function displayonepost(req,res) {
  const postfind=await posts.findOne({
   _id:req.params.id
  })
  console.log(req.params.id)
  if(!postfind){
    return res.send("not found")
  }
  res.json(postfind)
}
// update post 
async function updatepost(req,res) {
  const update=await posts.findByIdAndUpdate(
    req.params.id,
    req.body,
{ returnDocument: "after" }

  )
  res.json(update)
};


// delete the post
async function deletepost(req,res) {
await posts.findByIdAndDelete(
  req.params.id
)  
res.json("user deleted")
}

// exports
module.exports={
    createuser,
    loginreq,
    profileinfo,
     postscreation,
     displayposts,
     displayonepost,
     updatepost,
     deletepost
};