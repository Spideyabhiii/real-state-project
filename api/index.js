import express from 'express';
import mongoose from 'mongoose';
 import dotenv from 'dotenv';
 import userRouter from './routes/user.route.js';
 dotenv.config();

mongoose.connect(process.env.MONGO).then (() =>{
    console.log('connected to database');
    }).catch (err =>{
        console.log(err);
    });



const app = express();

app.listen(4000, () =>{
    console.log('Server is running on port 4000');
});

//create api route
app.use("/api/user", userRouter);