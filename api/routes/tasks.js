//Importar libreria
var express = require('express')
//Inicializar libreria
var app = express.Router()

//Arreglo de tareas
var tasks = []


// Definir ruta para obtener todas las tareas
app.get('/tasks/', function (req, res) {
    //RETORNO EL ARRAY DE TAREAS
    res.send(tasks)
})

//Definir ruta para obtener una tarea especifica con un id
app.get('/tasks/filter/:name?', function (req, res) {
    let name = req.params.name
    console.log(name);
    if (name) {
        let myTasks = tasks.filter(element => element.name.includes(name))
        res.send(myTasks)
    } else {
        res.send(tasks)
    }
})

//Definir ruta para obtener una tarea especifica con un id
app.get('/tasks/:id', function (req, res) {
    console.log(req.params);
    let id = req.params.id
    let myTask = tasks.find(element => element.id == id)
    console.log(myTask);
    if (myTask)
        res.send(myTask)
    else
        res.send({ message: 'Tarea no encontrada' })
})



/**
 * CREAR TAREA
 * REQ: SOLICITUD -> BODY (Es la tarea que voy a registrar)
 * RES: RESPUESTA -> LE VOY A RETORNAR LA TAREAS QUE HAY AGREGADAS
 */
app.post('/tasks/', (req, res) => {
    //Capturar el body (Es una tarea)
    let body = req.body
    console.log(body);

    //Guardar en el array
    tasks.push(body)
    //Lo que le voy a responder
    res.send(tasks)
})

module.exports = app
