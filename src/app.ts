import fastify from "fastify"
import { transactionRoutes } from "./http/routes/transactions"
import cors from "@fastify/cors"

export const app = fastify()

app.register(cors, {
	origin: true,
	methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
})
app.register(transactionRoutes)
