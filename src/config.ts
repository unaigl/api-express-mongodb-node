import dotenv from "dotenv";
dotenv.config();

interface Configuration {
  PORT: String | Number;
  HOST: String;
  DBNAME: String;
  USER: String;
  PASS: String;
}

export const config: Configuration = {
  PORT: process.env.PORT || 2800,
  HOST: process.env.HOST || "localhost",
  DBNAME: process.env.DBNAME || "mern",
  USER: process.env.USER || "",
  PASS: process.env.PASS || "",
};
