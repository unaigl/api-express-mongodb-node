import dotenv from "dotenv"
dotenv.config()

interface Configuration {
  PORT: String | Number
  HOST: String
  DATABASE: String
  USER: String
  PASS: String
}

export const config: Configuration = {
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || "localhost",
  DATABASE: process.env.DATABASE || "mern",
  USER: process.env.USER || "",
  PASS: process.env.PASS || "",
}
