//Importar libreria
var express = require('express')
var bodyparser = require('body-parser')
//Inicializar libreria
var app = express()

app.use(bodyparser.json())
app.use('/', require('./routes/tasks'))

var port = 3000
//Inicializar el servidor del API donde se va a ejecutar
app.listen(port, () => {
    console.log(`Mi Api se esta ejecutando http://localhost:${port}`)
})
