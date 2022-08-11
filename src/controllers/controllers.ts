import chalk from "chalk";
import debug from "debug";
import { NextFunction, Request, Response } from "express";
import things, { Thing } from "../data/things";
import { createCustomError } from "../middlewares.ts/errors";

export const getThings = (req: Request, res: Response) => {
  res.json({ things });
};

export const getOneThing = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { idThing } = req.params;
  const oneThing: Thing = things.find((item) => item.id === idThing);

  if (!things.includes(oneThing)) {
    const errorMessage = "Error, this id does not exist";
    const error = createCustomError(errorMessage, 404);
    debug(chalk.bgRed(`Things doesn't includes id ${idThing}`));
    next(error);
  }

  res.status(200).json(oneThing);
};
