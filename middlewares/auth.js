const Token =require("../models/token.model")
module.exports=async function(req,res,next)
{
    var token=req.header["Authorization"]
    if(!token)
    return res.send({Message:"no token provided"})

     token= await Token.findById(token) 

     if(!token)
     return res.send({Message:"Invalid token"});

     //set here so next function can access the userid by calling
     //req.userid
     res.userid = token.userid;
     next();
}