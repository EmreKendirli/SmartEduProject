import  express  from "express";
import session from'express-session';

import pageRoute from "./router/pageRoute.js";
import courseRoute from "./router/courseRoute.js";
import categoryRoute from "./router/categoryRoute.js"
import userRoute from "./router/userRoute.js"
import dotenv from "dotenv";
import conn from "./db.js"


const app=express();
dotenv.config();
conn();

 //Template Engine
 app.set("view engine","ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.json());//req.body gelen verileri okumak için lazım
app.use(express.urlencoded({
   extended: true
}))//req.body gelen verileri okumak için lazım
app.use(
   session({
     secret: 'my_keyboard_cat', // Buradaki texti değiştireceğiz.
     resave: false,
     saveUninitialized: true,
   })
 );

global.userIN=null;

//routers
app.use("*",(req,res,next) =>{
   userIN=req.session.userId,
   next()
})
app.use("/",pageRoute);
app.use("/courses",courseRoute);
app.use("/categories",categoryRoute);
app.use("/users",userRoute);


 const port =3000;
 app.listen(port,()=>{
    console.log(`App started on port: ${port}`)
 })