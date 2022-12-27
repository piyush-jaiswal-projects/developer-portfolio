import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import api from "./routes/routes.js";
import mongoose from "mongoose";
import ConnectDatabase from "./models/db.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

ConnectDatabase(process.env.DB_URL);

// middleware
app.use((req, res, next)=>{
    console.log("Request Endpoint: " + req.method + " " + req.url);
    next();
})

app.use('/', api);

app.get("*",(req, res)=>{
    res.status(200).json({
        message: "Catch All"
    });
});

 app.listen(port, ()=>{
    console.log("Backend is running on port "+port);
 });
