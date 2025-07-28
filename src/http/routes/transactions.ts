import type { FastifyInstance } from "fastify"
import { createTransaction } from "../controllers/create-transactions"
import { listTransactions } from "../controllers/list-all-transactions"

export async function transactionRoutes(app: FastifyInstance) {
	app.post("/transactions", createTransaction)
	app.get("/transactions", listTransactions)
}
