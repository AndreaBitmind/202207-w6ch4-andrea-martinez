import { Request, Response } from "express";
import things from "../data/things";

const getThings = (req: Request, res: Response) => {
  res.json({ things });
};

export default getThings;
