const express = require('express');
const port=3000
app = express()

const routes = require('./app/routes')
app.use('/', routes)

//Funcion de prueba
/*app.use(function(req, res){
    console.log(req.method)
    res.send(req.body)
})*/

app.listen(port,  function() {
    console.log('Server running at http://127.0.0.1:' + port);
})
