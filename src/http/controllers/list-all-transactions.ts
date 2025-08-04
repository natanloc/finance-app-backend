import type { FastifyReply, FastifyRequest } from "fastify"
import z from "zod"
import { prisma } from "../../lib/prisma"

export async function listTransactions(
	request: FastifyRequest,
	reply: FastifyReply,
) {
	const querySchema = z.object({
		name: z.string().optional(),
		month: z.coerce.number().min(1).max(12).optional(),
		year: z.coerce.number().optional(),
		type: z.enum(["Income", "Outcome"]).optional(),
		status: z.enum(["Paid", "Pending"]).optional(),
		frequency: z.enum(["Fixed", "Variable"]).optional(),
		minPrice: z.coerce.number().optional(),
		maxPrice: z.coerce.number().optional(),
		startDate: z.coerce.date().optional(),
		finalDate: z.coerce.date().optional(),
	})

	type querySchema = z.infer<typeof querySchema>

	let filters: querySchema

	try {
		filters = querySchema.parse(request.query)
	} catch {
		return reply.status(400).send({ message: "Invalid query parameters" })
	}

	const where: any = {}

	if (filters.month && filters.year) {
		const startDate = new Date(filters.year, filters.month - 1, 1)
		const finalDate = new Date(filters.year, filters.month, 0, 23, 59, 59)
		where.date = { gte: startDate, lte: finalDate }
	}

	if (filters.type) where.type = filters.type
	if (filters.frequency) where.frequency = filters.frequency
	if (filters.status) where.status = filters.status

	if (filters.minPrice || filters.maxPrice) {
		where.price = {}

		if (filters.minPrice) {
			where.price.gte = filters.minPrice
		}

		if (filters.maxPrice) {
			where.price.lte = filters.maxPrice
		}
	}

	if (filters.name) {
		where.name = { contains: filters.name, mode: "insensitive" }
	}

	const transactions = await prisma.transaction.findMany({
		where,
		orderBy: {
			date: "desc",
		},
	})

	return reply
		.status(201)
		.send({ message: "Transactions listed successfully.", transactions })
}
