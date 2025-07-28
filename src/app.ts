import fastify from "fastify"
import { transactionRoutes } from "./http/routes/transactions"
import cors from "@fastify/cors"

export const app = fastify()

app.get("/", async () => {
	return { message: "TÁ RODAAAANDO" }
})

app.register(transactionRoutes)
app.register(cors, {
	origin: "http://localhost:5173",
})
