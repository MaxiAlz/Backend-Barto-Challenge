const { Router } = require('express')
const route = Router()
const { getCowsRegister, createCowsRegister, deleteCowsRegister, patchCowsRegister} = require('../controllers/cowsController')

route.get('/' ,getCowsRegister)

route.post('/',createCowsRegister)

route.delete('/:id', deleteCowsRegister)

route.patch('/:id',patchCowsRegister)

module.exports = route
