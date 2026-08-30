const mongoose = require("mongoose");


const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
       type:String,
    required:true,
    unique:true
    },
    password:{
            type:String,
    required:true
    }
});
const user=mongoose.model("blogapp",userschema)
module.exports={
    user
}