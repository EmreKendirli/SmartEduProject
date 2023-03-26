import mongoose from "mongoose";
const conn = () =>{
    mongoose.connect(process.env.Db_URI,{
        dbName : "smartEdu",
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("connected to the db succesully")
    }).catch((err)=>{
        console.log(`DB connection err: ${err}`);
    });
};
export default conn;