const express = require('express')
const routes = require('./routes')
const db = require('./database')

const server = express()
const port = process.env.PORT || 3000

server.use(express.json())
server.use('/api', routes)

db.sync().then(() => console.log("Banco conectado com sucesso!"))

server.listen(port, () => console.info(`Servidor rodando na porta ${port}`))