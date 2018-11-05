const express = require('express');

//ENRUTADOR
const routes = express.Router()

//Parcear la información del body a json
routes.use(express.json())

routes.use('/pacientes', require('./controllers/Paciente'))
routes.use('/citas', require('./controllers/Citas'))
routes.use('/historial', require('./controllers/HistorialClinico'))

module.exports = routes
