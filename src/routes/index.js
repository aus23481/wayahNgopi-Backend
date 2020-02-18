const express = require('express')
const Route = express.Router()
const posRouter = require('./pos')

Route
  .use('/pos', posRouter)
  .use('/uploads', express.static("./uploads"))

module.exports = Route
