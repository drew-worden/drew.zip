//Import packages
import dotenv from "dotenv"
import morgan from "morgan"
import compression from "compression"
import express from "express"

//Import utilities
import logger from "./utilities/logger"

//Import routers
import dashboardRouter from "./routers/dashboard-router"

//Load environment variables
dotenv.config()
const port = process.env.PORT || 3000

//Initialize server
const server = express()

//Set stream for logger
const stream = {
	write: (message: string) => logger.http(message)
}

//Package middleware
server.use(compression())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(
	morgan(":remote-addr :method :url :status :res[content-length] - :response-time ms", {
		stream,
		skip: () => false
	})
)

//Route handlers
server.use("/dashboard", dashboardRouter)

//Start service
server.listen(port, async () => {
	logger.info(`Server started up successfully on port ${port}.`)
})
