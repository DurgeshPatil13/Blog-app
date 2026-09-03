const jwt=require("jsonwebtoken");

// profile validate middleware
async function validateprofile(req,res,next) {
    const token=req.cookies.token
    if(!token){
        return  res.json({
            message:"no login"
        })
    }
    const pass=jwt.verify(token,process.env.secret)
    if(!pass){
        return res.json({
            message:"sorry you cant access"
        })
    }
   req.userId=pass.userid;

    next();
};


module.exports={
    validateprofile
}