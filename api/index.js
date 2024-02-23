const express=require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

require('dotenv').config();
const app = express();


const connectDB=async()=>{
    try {
       await mongoose.connect(process.env.DB_URI);
       console.log("database is connected");
    } catch (error) {
        console.log(error);
    }
}

// connect to db
connectDB();
const PORT=process.env.PORT;
app.listen(PORT,(err)=> err ?
console.log(err) : console.log("server is running"));