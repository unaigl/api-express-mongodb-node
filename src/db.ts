import mongoose from "mongoose"
import { config } from "./config"

export async function connectDB() {
  try {
    const db = await mongoose.connect(
      `mongodb://${config.HOST}/${config.DATABASE}`
    )
    console.log("Database is connected to: ", db.connection.name)
  } catch (error) {
    console.error(error)
  }
}
