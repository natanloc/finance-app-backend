import z from "zod"
import type { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../../lib/prisma"

export async function createTransaction(
	request: FastifyRequest,
	reply: FastifyReply,
) {
	const transactionSchema = z.object({
		name: z.string(),
		price: z.coerce.number().nonnegative(),
		type: z.enum(["Income", "Outcome"]),
		status: z.enum(["Paid", "Pending"]),
		frequency: z.enum(["Fixed", "Variable"]),
		date: z.coerce.date(),
		validity: z.date().nullable(),
	})

	const { name, price, type, status, frequency, date, validity } =
		transactionSchema.parse(request.body)

	await prisma.transaction.create({
		data: {
			name,
			price,
			type,
			status,
			frequency,
			date,
			validity,
		},
	})

	return reply.status(201).send({ message: "Transaction created successfully" })
}
