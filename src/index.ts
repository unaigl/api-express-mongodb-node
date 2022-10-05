import express from "express"
import morgan from "morgan"
import cors from "cors"
import { connectDB } from "./db"
import router from "./routes/routes"

const app = express()

app.set("port", 3000)
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)

connectDB() // database connection

app.listen(3000, () => {
  console.log(`Server started on port 3000`)
})
