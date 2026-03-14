const { verifyJWT } = require("../utils/generateToken");

 const verifyUser = async(req, res, next)=>{
  // console.log(req.headers.authorization)
 try {
   let token = req.headers.authorization?.split(" ")[1];
   // console.log("auth", token)

   if (!token) {
     return res.status(400).json({
       success: false,
       message: "Token not found",
     });
   }

   try {
     // console.log("auth token", token)
     let user = await verifyJWT(token);
     // console.log("auth middleware user: ", user)

     if (!user) {
       return res.status(400).json({
         success: false,
         message: "User not varifed",
       });
     }
     // console.log("authMiddleware: " ,user)
     req.user = user.id;
     next();
   } catch (error) {
     return res.status(401).json({ error: error, message: "Invalid token" });
   }
 } catch (error) {
  return res.status(500).json({
    message: 'Token not found'
  })
 }

}

module.exports = verifyUser

