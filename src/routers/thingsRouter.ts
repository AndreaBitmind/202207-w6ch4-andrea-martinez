import express from "express";
import getThings from "../controllers/controllers";

const thingsRouter = express.Router();

thingsRouter.get("/", getThings);
