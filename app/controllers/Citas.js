//Intanciar el express
const express = require('express');
const routes = express.Router()
const crud = require('../services/crud_mongo')
const cita = require('../models/cita')
const crud = require('../services/crud_mongo')

routes.get('/', function (req, res) {
    //Capturo la respuesta del get 
    crud.Mongo().get('Citas', {}).then(function (cita) {
        //Retorno la respuesta  al cliente
        var obj =JSON.parse(this.cita)
        var items=obj['pacientes'];
        items.forEach((e) => {
            txt += '<tr>'  
            txt += '<td>'+e.cedula+'</td>'
            txt += '<td>'+e.fecha+'</td>'
            txt += '<td>'+e.hora+'</td>'
            txt += '<td>'+e.doctor+'</td>'
            txt += '</tr>'
        });
        document.getElementById('tbList').innerHTML = txt;
        console.log(cita);
        res.send(cita)
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
    crud.Mongo().get('Citas', filtro).then(function (respuesta) {
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
    crud.Mongo().insert('Citas', body).then(function(respuesta){
        console.log('Respuesta cuando se agrega', respuesta)
        res.send(respuesta)
    }).catch(function(error){
        console.log('Error al agregar', error)
        res.send(error)
    })
    
})

module.exports = routes