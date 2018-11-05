const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HistoriaClinica = new Schema(
  {
    _id : String,
    historia_clinica : String
  }
)

module.exports = mongoose.model('HistoriaClinica', HistoriaClinica)
