import express from "express";
import baseAPI from "../controllers/home.js";

const Router = express.Router();

Router.get("/base", baseAPI);

export default Router;

