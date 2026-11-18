import express from "express"
import ConnectDB from "./config/db.js"
import cors from "cors"
import dotenv from "dotenv"

import BlogRoutes from "./routes/BlogRoutes.js"
import AuthRoutes from "./routes/AuthRoutes.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.get("/", (req, res)=> {
    return res.status(200).json({
        "success" : true,
        "message" : "Server is alive"
    }) 
})

app.use("/api/blog", BlogRoutes)
app.use("/api/auth", AuthRoutes)

const PORT = process.env.PORT || 5000

ConnectDB()

app.listen(PORT, ()=> {
    console.log(`Server running on http://127.0.0.1:${PORT}/`)
})

