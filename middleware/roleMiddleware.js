import User from "../models/User.js"
const a =async (req,res,next)=>{
    const user =await User.findById(req.session.userId)
    if(user){
        if(user.role=="Teacher" || user.role=="Admin"){
            next();
        }
    }
    
    else{
        return res.status(401).send("you cant do it");
    }
}
export{a}