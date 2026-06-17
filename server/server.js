import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";

dotenv.config();

const app = express();

const port = 3000;
await connectDB();

// Middleware
app.use(cors()); 
app.use(express.json());

app.use("/api/inngest", serve({ client: inngest, functions }));


// app.use(clerkMiddleware())


// Routes
app.get('/',(req,res)=>{
    res.send("Server is running");
})


if (process.env.NODE_ENV !== "production") {
  app.listen(port, () =>
    console.log(`Server is running at http://localhost:${port}`)
  );
}
export default app;