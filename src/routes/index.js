const express = require('express')
const Route = express.Router()
const posRouter = require('./pos')

Route
  .use('/pos', posRouter)

module.exports = Route
