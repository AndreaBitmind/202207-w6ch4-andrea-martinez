import { debug } from "console";
import { Request, Response } from "express";
import things from "../data/things";

export const getThings = (req: Request, res: Response) => {
  res.json({ things });
};

export const getOneThing = (req: Request, res: Response) => {
  const { idThing } = req.params;
  const oneThing = things.filter((item) => item.id === idThing);
  debug(oneThing);
  res.status(200).json(oneThing);
};
