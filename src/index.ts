import express from "express";
import Cors from "cors";
import morgan from "morgan";
import { config } from "./config";
import socialRoute from "./routes/routes";

import "./database";

const app = express();

app.listen(config.PORT, () => {});
app.use(Cors());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(socialRoute);
