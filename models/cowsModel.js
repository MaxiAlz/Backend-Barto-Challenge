const { Schema, model } = require('mongoose')

const cowSchema = Schema({
  idSenasa: String,
  animalType: String,
  weight: Number,
  potreroName: String,
  deviceType: String,
  deviceNumber: String
})

module.exports = model('cow', cowSchema)