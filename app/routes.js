const express = require('express');

//ENRUTADOR
const routes = express.Router()

//Parcear la información del body a json
routes.use(express.json())


routes.use('/user', require('./controllers/users'))
<<<<<<< HEAD
routes.use('/fruit', require('./controllers/fruits'))
=======
routes.use('/pacientes', require('./controllers/Paciente'))
routes.use('/citas', require('./controllers/Citas'))
routes.use('/historial', require('./controllers/HistorialClinico'))

>>>>>>> 24314e3ab8046e5acf5387a56e1865820d554d5a

module.exports = routes