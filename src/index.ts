import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_CONNECTION as string).then(()=>{
    console.log('Connected to MongoDB');

}).catch((err)=>{
    console.log('Error connecting to MongoDB', err);
})

const app = express();
app.use(express.json());
app.use(cors());

app.get('/test', async (req: Request, res: Response)=>{
    res.json({message: 'Hello World!'});
})

app.listen(7000,()=>{
    console.log('Server is running on port 7000');
})

