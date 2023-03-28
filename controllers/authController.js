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
                res.status(200).send("you are loggin in");  
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
export {
    createUser,
    userLogin
};