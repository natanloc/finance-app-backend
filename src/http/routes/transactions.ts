import type { FastifyInstance } from "fastify"
import { createTransaction } from "../controllers/create-transactions"
import { listTransactions } from "../controllers/list-all-transactions"
import { deleteTransaction } from "../controllers/delete-transaction"

export async function transactionRoutes(app: FastifyInstance) {
	app.post("/transactions", createTransaction)
	app.get("/transactions", listTransactions)
	app.delete("/transactions/:id", deleteTransaction)
}
