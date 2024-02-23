import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

const PORT=process.env.PORT;
app.listen(PORT,(err)=> err ?
console.log(err) : console.log("server is running"));


 app.get('/test',(req, res)=>{
     res.json({message:"api is working"});
 });