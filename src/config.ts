import dotenv from "dotenv";
dotenv.config();

export const config = {
  PORT: process.env.PORT || 2800,
  HOST: process.env.HOST || "localhost",
  DATABASENAME: process.env.DATABASENAME || "mern",
};
