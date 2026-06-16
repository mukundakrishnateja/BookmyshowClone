import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

app.use(cors()); // 
app.use(express.json());

const port = 3000;
// Load environment variables from .env file
app.get('/',(req,res)=>{
    res.send("Server is running");
})

app.listen(port,()=> console.log(`Server is running at http://localhost:3000/`));