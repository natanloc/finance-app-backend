/** biome-ignore-all assist/source/organizeImports: . */
import { z } from "zod"
import { prisma } from "../../lib/prisma"
import type { FastifyRequest, FastifyReply } from "fastify"

export async function updateTransaction(
	request: FastifyRequest,
	reply: FastifyReply,
) {
	const paramsSchema = z.object({
		id: z.string(),
	})

	const bodySchema = z.object({
		name: z.string(),
		price: z.coerce.number().nonnegative(),
		type: z.enum(["Income", "Outcome"]),
		status: z.enum(["Paid", "Pending"]),
		frequency: z.enum(["Fixed", "Variable"]),
		date: z.coerce.date(),
		validity: z.date().nullable(),
	})

	const { id } = paramsSchema.parse(request.params)
	const data = bodySchema.parse(request.body)

	try {
		const existingTransaction = await prisma.transaction.findUnique({
			where: { id },
		})

		if (!existingTransaction) {
			return reply.status(404).send({ message: "Cannot find transaction." })
		}

		const updated = await prisma.transaction.update({
			where: { id },
			data,
		})

		return reply.status(200).send({
			message: "Transaction updated successfully.",
			transaction: updated,
		})
	} catch {
		return reply.status(500).send({ message: "Internal server error" })
	}
}
