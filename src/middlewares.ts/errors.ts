import chalk from "chalk";
import debug from "debug";
import { NextFunction, Request, Response } from "express";

interface CustomError extends Error {
  message: string;
  code: number;
  publicMessage?: string;
}

export const notFoundError = (req: Request, res: Response) => {
  res.status(404).json({ error: "Endpoint not found" });
};

export const createCustomError = (message: string, code: number) => {
  const error = new Error(message) as CustomError;
  error.code = code;
  error.publicMessage = message;

  return error;
};

export const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  const errorCode = error.code ?? 500;
  const errorMessage = error.publicMessage ?? "Everything is wrong";

  debug(chalk.red("Error"));

  res.status(errorCode).json({ error: errorMessage });
};
