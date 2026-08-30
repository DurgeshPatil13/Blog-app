const {user}=require("../models/user")
const bcrypt=require("bcrypt");
async function createuser(req,res) {
    const hashpass=await bcrypt.hash(req.body.password,10)
    const User=await user.create({
        name:req.body.name,
        email:req.body.email,
        password:hashpass
    })
    return res.json(User)
}
module.exports={
    createuser
};