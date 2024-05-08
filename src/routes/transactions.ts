import { randomUUID } from "node:crypto"

import type { FastifyInstance } from "fastify"
import { z } from "zod"

import { knex } from "../database"
import { checkSessionIdExists } from "../middlewares/check-session-id-exists"

export async function transactionsRoutes(app: FastifyInstance) {
  app.get("/", { preHandler: [checkSessionIdExists] }, async request => {
    const { sessionId } = request.cookies

    const transactions = await knex("transactions")
      .select()
      .where("sessionId", sessionId)

    return { transactions }
  })

  app.get(
    "/:id",
    { preHandler: [checkSessionIdExists] },
    async (request, reply) => {
      const paramsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = paramsSchema.parse(request.params)

      const { sessionId } = request.cookies

      const transaction = await knex("transactions")
        .where({
          id,
          sessionId,
        })
        .first()

      if (!transaction) {
        return reply.code(404).send({
          message: "Transaction not found.",
        })
      }

      return { transaction }
    },
  )

  app.get("/summary", { preHandler: [checkSessionIdExists] }, async request => {
    const { sessionId } = request.cookies

    const summary = await knex("transactions")
      .where("sessionId", sessionId)
      .sum("amount", { as: "amount" })
      .first()

    return summary
  })

  app.post("/", async (request, reply) => {
    const bodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(["credit", "debit"]),
    })

    const { amount, title, type } = bodySchema.parse(request.body)

    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()

      reply.setCookie("sessionId", sessionId, {
        path: "/",
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })
    }

    await knex("transactions").insert({
      id: randomUUID(),
      title,
      amount: type === "credit" ? amount : amount * -1,
      sessionId,
    })

    reply.code(201).send()
  })
}
