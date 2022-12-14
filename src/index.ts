import "./loadEnvironment";
import express from "express";
import Debug from "debug";
import chalk from "chalk";
import thingsRouter from "./routers/thingsRouter";
import { generalError, notFoundError } from "./middlewares.ts/errors";

const debug = Debug("api-rest-things-i-already-know:index.ts");
const port = process.env.PORT ?? 4000;

const app = express();

app.use("/things", thingsRouter);

app.use(generalError);
app.use(notFoundError);

app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

app.listen(port, () => {
  debug(chalk.blue(`Serve listening on http://localhost:${port}`));
});

export default app;
