const express = require('express');
const paciente = require('./controllers/Paciente')

//ENRUTADOR
const routes = express.Router()

//Parcear la información del body a json
routes.use(express.json())

//routes.get('/pacientes', paciente.findAll)
routes.use('/pacientes', require('./controllers/Paciente'))
routes.use('/citas', require('./controllers/Citas'))
routes.use('/historial', require('./controllers/HistorialClinico'))

module.exports = routes
