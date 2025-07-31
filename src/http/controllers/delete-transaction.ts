import type { FastifyReply, FastifyRequest } from "fastify"
import { prisma } from "../../lib/prisma"

export async function deleteTransaction(
	request: FastifyRequest,
	reply: FastifyReply,
) {
	const { id } = request.params as { id: string }

	try {
		const transaction = await prisma.transaction.findUnique({
			where: { id },
		})

		if (!transaction) {
			return reply.status(404).send({ message: "Transaction not found" })
		}

		await prisma.transaction.delete({
			where: { id },
		})

		return reply.status(204).send()
	} catch (error) {
		console.error(error)
		return reply.status(500).send({ message: "Internal server error" })
	}
}
