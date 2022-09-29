import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "./config";
import routes from "./router/profile.routes";
import { connectDB } from "./database";

const app = express();

app.set("port", config.PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
connectDB();

app.use(routes);

const start = (): void => {
  try {
    app.listen(config.PORT, () => {
      console.log(`Server started on port ${config.PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
start();
