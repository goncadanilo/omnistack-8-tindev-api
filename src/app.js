const express = require('express')
const mongoose = require('mongoose')
const databaseConfig = require('./config/database')

class App {
  constructor () {
    this.express = express()

    this.database()
    this.middleware()
    this.routes()
  }

  database () {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  }

  middleware () {
    this.express.use(express.json())
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
