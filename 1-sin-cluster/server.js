const express = require('express')

const app = express()

const PORT = parseInt(process.argv[2]) || 8080
console.log('PUERTO= ' + PORT)
app.get('/', (req, res) => {
    res.send(`Servidor express en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
})

app.listen(PORT, err => {
    if (!err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
})
