//Import packages
import { Request, Response } from "express"

//Test controller
async function testController(req: Request, res: Response) {
	return res.status(200).json({ success: true })
}

//Export controller
export default testController
