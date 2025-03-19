const express = require('express');
const mongoose = require ('mongoose');
const Listing =require("./models/listing.js")
const port =3000;
const app = express();
const MONGO_URL="mongodb://127.0.0.1:27017/Wanderlust"
const main =()=>{

    mongoose.connect(MONGO_URL).then(
        console.log("Connection Established").catch(err=> console.log(err))
    )
}

app.get("/",(req,res)=>{
    res.send("Working")
})
app.get("/test",(req,res)=>{
    res.send("Working")
    
})
app.listen(port,(req,res)=>{
    console.log(`Listening to the port ${port}`)
})