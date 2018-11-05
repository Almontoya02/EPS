const express = require('express');

//ENRUTADOR
const routes = express.Router()

//Parcear la información del body a json
routes.use(express.json())


routes.use('/user', require('./controllers/users'))
routes.use('/fruit', require('./controllers/fruits'))

module.exports = routes