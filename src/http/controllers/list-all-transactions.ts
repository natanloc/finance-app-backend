import type { FastifyReply, FastifyRequest } from "fastify"
import { prisma } from "../../lib/prisma"

export async function listTransactions(
	_request: FastifyRequest,
	reply: FastifyReply,
) {
	const transactions = await prisma.transaction.findMany({
		orderBy: {
			date: "desc",
		},
	})

	return reply
		.status(201)
		.send({ message: "Transactions listed successfully.", transactions })
}
