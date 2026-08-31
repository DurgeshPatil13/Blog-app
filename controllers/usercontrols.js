const {user}=require("../models/user")
const bcrypt=require("bcrypt");

  const jwt=require("jsonwebtoken")
require("dotenv").config()

// user creation
async function createuser(req,res) {
    const hashpass=await bcrypt.hash(req.body.password,10)
   try{ const User=await user.create({
        name:req.body.name,
        email:req.body.email,
        password:hashpass
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
res.send("done")
}

// exports
module.exports={
    createuser,
    loginreq
};