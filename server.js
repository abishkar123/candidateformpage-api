import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();
// import path from "path";

const PORT = process.env.PORT || 8000;

//db connect
import { dbConnect } from './src/config/dbConfig.js';
dbConnect();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// API router 
import candidaterouter from './src/router/candidaterouter.js'
app.use("/api/v1/candidate", candidaterouter)


// root url request 
app.use("/", (req, res, next)=>{
    const error ={
        message: "your code is out from router"
    }
})

app.use((error, req, res, next)=>{
    console.log(error);
    const statusCode = error.errorCode  || 404;
    res.status(statusCode).json({
        status: "error",
        message: error.message,
    })
})

app.listen(PORT, (error)=>{
    error
    ?console.log(error)
    :console.log(`server is running at http://localhost:${PORT}`)
});