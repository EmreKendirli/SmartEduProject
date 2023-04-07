import User from "../models/User.js"
const authenticateUser = async (req, res, next) => {

    const user = await User.findById(req.session.userId)

    if(!user){
        return res.redirect("/login");
    }
    next();
}

export{authenticateUser}