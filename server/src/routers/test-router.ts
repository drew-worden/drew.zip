//Import packages
import express, { Request, Response } from "express"

//Import controllers
import testController from "../controllers/test-controller"

//Router initialization
const testRouter = express.Router()

//Route for test controller at /
testRouter.get("/", (req: Request, res: Response) => {
	testController(req, res)
})

//Export router
export default testRouter
