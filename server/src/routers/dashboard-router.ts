//Import packages
import express, { Request, Response } from "express"

//Import controllers
import setStatusBadgeController from "../controllers/dashboard/set-status-badge-controller"

//Router initialization
const dashboardRouter = express.Router()

//Set status badge
dashboardRouter.post("/set-status-badge", (req: Request, res: Response) => {
	setStatusBadgeController(req, res)
})

//Export router
export default dashboardRouter
