import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: 'http://localhost:4000',
})

app.register(memoriesRoutes)

app
  .listen({
    port: 4000,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http:localhost:4000')
  })
