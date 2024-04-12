// Arquivo responsavel pelo Servidor
const app = require('./App')
const database = require('../database/models')
const port = 8000

const server = app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})


module.exports = server