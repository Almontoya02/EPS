const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Paciente = new Schema(
  {
    _id : String,
    nombre : String,
    apellido : String,
    correo : String,
    direccion : String,
    password : String,
    telefono : String
  }
)

module.exports = mongoose.model('Paciente', Paciente)
