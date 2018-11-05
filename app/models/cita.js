const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cita = new Schema(
  {
    _id : String,
    fecha : String,
    hora : String,
    doctor : String
  }
)

module.exports = mongoose.model('Cita', Cita)
