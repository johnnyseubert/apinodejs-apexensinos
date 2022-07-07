const express = require('express')
const routes = require('./routes')
const db = require('./database')

const server = express()

server.use(express.json())
server.use('/api', routes)

db.sync()
   .then(() => console.log("Banco conectado com sucesso!"))


server.listen(3333, () => {
   console.log("Servidor rodando");
})