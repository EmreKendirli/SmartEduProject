const express =require("express");
 const app=express();

 //Template Engine
 app.set("view engine","ejs");

//Middlewares
app.use(express.static("public"));
//routers
app.get("/",(req,res)=>{
   res.status(200).render("index",{
      page_Name:"index"
   });
});

app.get("/about",(req,res)=>{
   res.status(200).render("about",{
      page_Name:"about"

   });
})

 const port =3000;
 app.listen(port,()=>{
    console.log(`App started on port: ${port}`)
 })