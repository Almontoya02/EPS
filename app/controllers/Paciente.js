//Intanciar el express
const express = require('express');
const routes = express.Router()
//const Paciente = mongoose.model('Paciente')
const crud = require('../services/crud_mongo')

routes.get('/pacientes', function (req, res) {
    //Capturo la respuesta del get
    crud.Mongo().get('Pacientes', {}).then(function (respuesta) {
        //Retorno la respuesta  al cliente
        console.log(respuesta);
        res.send(respuesta)
    }).catch(function (error) {
        //Retorno el error al cliente
        console.log(error)
        res.send(error)
    });
})

routes.get('/:name/:activo?', function (req, res) {
    //Capturar parametro de url (name)
    var name_param = req.params.name
    console.log('Parametro opcional ',req.params.activo)
    //Capturar otros parametros (?id=5&name=saurmo)
    var query_param = req.query
    console.log(query_param)
    //filtro para consultar
    var filtro = { name: name_param }
    //Capturo la respuesta del get
    crud.Mongo().get('Pacientes', filtro).then(function (respuesta) {
        //Retorno la respuesta  al cliente
        res.send(respuesta)
    }).catch(function (error) {
        //Retorno el error al cliente
        console.log(error)
        res.send(error)
    });
})

routes.put('/', function (req, res) {

})

routes.post('/', function (req, res) {
    //Capturar los datos a guardar
    var body = req.body;
    crud.Mongo().insert('Pacientes', body).then(function(respuesta){
        console.log('Respuesta cuando se agrega', respuesta)
        res.send(respuesta)
    }).catch(function(error){
        console.log('Error al agregar', error)
        res.send(error)
    })

})

module.exports = routes
