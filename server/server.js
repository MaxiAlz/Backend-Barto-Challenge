const express = require('express')
const app = express()
const cors =  require('cors')
require('dotenv/config')
const morgan = require('morgan')
const port = process.env.PORT
require('../dataBase/connection')
const cowsRoutes = require('../routes/cowsRegisterRoute')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/cows', cowsRoutes)

app.listen(port, () => {
  console.log(`Listening port ${port}`)
})

