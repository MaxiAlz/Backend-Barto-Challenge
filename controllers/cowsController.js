const Cow = require('../models/cowsModel')

const getCowsRegister = async (req, res) => {
  try {
    const result = await Cow.find({})
    res.status(200).json(result)
  } catch (error) {
    res.status(404).json(error)
  }
}

const createCowsRegister = async (req, res) => {
  const { idSenasa, animalType, weight, potreroName, deviceType, deviceNumber } = req.body
  try {
    const cow = new Cow({
      idSenasa, animalType, weight, potreroName, deviceType, deviceNumber
    })
    const newCow = await cow.save()
    res.status(201).json("Create sucessful")
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteCowsRegister = async (req, res) => {
  // console.log(req.params);
  const { id } = req.params
  try {
    const cows = await Cow.findByIdAndRemove(id)
    if (cows !== null) {
      res.status(200).json(cows)
    } else {
      res.status(400).json("No se encontro registro")
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

const patchCowsRegister = async (req, res) => {
  const { id } = req.params
  const { body } = req

  console.log(id, body)
  try {
    const cows = await Cow.findByIdAndUpdate(id, body , {new: true} )
    if (cows !== null) {
      res.status(200).json(cows)
    } else {
      res.status(400).json("No se encontro registro")
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  getCowsRegister,
  createCowsRegister,
  deleteCowsRegister,
  patchCowsRegister
}