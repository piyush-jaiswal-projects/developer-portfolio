import express from "express";
import baseAPI from "../controllers/home.js";

const Router = express.Router();

// mention all API routes
Router.get("/base", baseAPI);

export default Router;

