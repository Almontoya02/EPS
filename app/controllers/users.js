const express = require('express');
const serviceMongo = require('../services/mongo')
const routes = express.Router()

routes.get('/', function(req, res){

    var sms = serviceMongo.Mongo().showHello()
   console.log(sms)
   var smsConnection = serviceMongo.Mongo().connection()

    res.send({name:'Estoy en usuario', smsClass:sms})
})

routes.post('/', function(req, res){
    res.send({name:'Estoy en post usuario'})
})

module.exports = routes