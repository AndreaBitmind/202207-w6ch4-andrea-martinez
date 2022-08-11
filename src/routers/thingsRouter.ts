import express from "express";
import { getThings, getOneThing } from "../controllers/controllers";

const thingsRouter = express.Router();

thingsRouter.get("/", getThings);
thingsRouter.get("/:idThing", getOneThing);

export default thingsRouter;
