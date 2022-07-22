const mongoose = require('mongoose')

const dbConnection = async() => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log("successful connection")
  } catch (error) {
    console.log(error)
  }
}

dbConnection()