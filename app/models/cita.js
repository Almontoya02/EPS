const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Citas = new Schema(
  {
    cedula : String,
    fecha : String,
    hora : String,
    doctor : String
  }
)

module.exports = mongoose.model('Citas', Citas)
