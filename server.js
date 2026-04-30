import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

// POST http://localhost:3333/videos

// PUT http://localhost:3333/videos/1

// ROUTE parameter

server.post('/videos', (request, reply) => {

  const { title, description, duration } = request.body


  database.create({
    title,
    description,
    duration
  })

  console.log(database.list())

  return reply.status(201).send({
    message: 'Video created successfully'
  })
})


// QUANTO QUEREMOS RETORNAR ALGO SEM EDITAR STATUS OU ALGO DO TIPO
//server.get('/videos', (request, reply) não precisa do reply, basta retornar o valor que ele já entende que é o body da resposta
server.get('/videos', (request) => {

  const search = request.query.search

  const videos = database.list(search)
  
  return videos
})

server.put('/videos/:id', (request, reply) => {
  const videoId = request.params.id
  const { title, description, duration } = request.body

  database.update(videoId, {

    title,
    description,
    duration

  })

  return reply.status(204).send()
})


server.delete('/videos/:id', (request, reply) => {
  const videoId = request.params.id

  database.delete(videoId)
  return reply.status(204).send()
})

server.listen({
  port: 3333
}) 
