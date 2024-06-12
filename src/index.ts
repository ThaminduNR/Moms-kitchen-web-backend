 import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import myUserRoute from './routes/MyUserRoute';

// connect DB
mongoose.connect(process.env.MONGODB_CONNECTION as string).then(()=>{
    console.log('Connected to MongoDB');

}).catch((err)=>{
    console.log('Error connecting to MongoDB', err);
})

const app = express();
app.use(express.json());
app.use(cors());

// verfy Connect DB
app.listen(7000,()=>{
    console.log('Server is running on port 7000');
})


//API routes

// /api/my/user
app.use("/api/my/user",myUserRoute);