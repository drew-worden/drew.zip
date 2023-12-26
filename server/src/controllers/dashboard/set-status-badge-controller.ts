//Import packages
import { Request, Response } from "express"

//Import utilities
import prisma from "../../utilities/database"

//Body type

//Set status badge controller
async function setStatusBadge(req: Request, res: Response) {
	const { status, message } = req.body

	status.toUpperCase()

	await prisma.dashboard.update({
		where: { id: 1 },
		data: { statusBadgeStatus: status, statusBadgeMessage: message }
	})
	return res.status(200).json({ success: true })
}

//Export controller
export default setStatusBadge
