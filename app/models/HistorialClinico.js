const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Citas = new Schema(
  {
    cedula : String,
    historia_clinica : String
  }
)

module.exports = mongoose.model('HistoriaClinica', Citas)