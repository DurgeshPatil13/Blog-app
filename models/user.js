const mongoose = require("mongoose");

// user schema
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

// posts schema
const postschema=mongoose.Schema({
    title:{
        type:String,
   
    },
    content:{
            type:String,
   
    },
    author:{
             type:String,
  
    }
})
const posts=mongoose.model("posts",postschema)
module.exports={
    user,
    posts,
}