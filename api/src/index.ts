import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { prisma } from "../prisma/prisma";
import { PrismaUserRepository } from './infrastructure/prismaUserRepository'
import { GetUserUseCase } from './usecase/getUserUseCase'

const app = new Hono()
const userRepository = new PrismaUserRepository(prisma)
const getUserUseCase = new GetUserUseCase(userRepository)

const route = app
.get('/', (c) => {
  return c.json({
    message: 'Hello Hono!'
})   
})
.get('/user/:id', async (c) => {
  const id = parseInt(c.req.param('id'))
  
  if (isNaN(id)) {
    return c.json({ error: 'Invalid user ID' }, 400)
  }
  
  const user = await getUserUseCase.execute(id)
  
  if (!user) {
    return c.json({ error: 'User not found' }, 404)
  }
  
  return c.json(user)
})

export type AppType = typeof route;

serve({
  fetch: app.fetch,
  port: 3001
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
