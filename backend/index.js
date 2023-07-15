const express = require("express");
const app = express();
const port = process.env.PORT || 5000 ;

app.get("/",(req,res)=>{
    res.send("hello nodejs")
})

app.get("/user",(req,res)=>{
    res.send("welcome user")
})

app.listen(port,()=>{
    console.log("runing at 5000 port")
})