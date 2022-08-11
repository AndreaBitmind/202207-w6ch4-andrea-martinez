import "./loadEnvironment";
import express from "express";
import Debug from "debug";
import chalk from "chalk";

const debug = Debug("api-rest-things-i-already-know:index.ts");
const port = process.env.PORT ?? 4000;

const app = express();

app.listen(port, () => {
  debug(chalk.blue(`Serve listening on http://localhost: ${port}`));
});
