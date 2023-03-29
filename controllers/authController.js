import User from "../models/User.js";
import bcrypt from "bcrypt";



const createUser = async (req, res) => {

    try {
        const user = await User.create(req.body);
        res.status(201).json({
            succeded: true,
            user
        })
    } catch (error) {
        res.status(400).json({
            succeded: false,
            error
        })
    }
}

const userLogin = async (req, res) => {

    try {
        const {
            email,
            password
        } = req.body;
        const userCheck = await User.findOne({
            email
        });
        if (userCheck) {         
            const same =await bcrypt.compare(password,userCheck.password)
            if (same) {
                req.session.userId=userCheck._id;
                res.status(200).redirect("/users/dashboard");
            }
            else{
                res.status(400).json({
                    succeded: false,
                    error:"password "
                })
            }  
        }
    } catch (error) {
        res.status(400).json({
            succeded: false,
            error
        })
    }
}

const userLogout=async (req,res)=>{
   req.session.destroy(()=>{
    res.status(200).redirect("/");
   })
}

const userDashboardPage = async (req,res)=>{
    try {
        const user = await User.findOne({_id:req.session.userId})
        res.status(200).render("dashboard",{
            page_Name:"dashboard",
            user
        })
    } catch (error) {
        
    }
}
export {
    createUser,
    userLogin,
    userLogout,
    userDashboardPage
};