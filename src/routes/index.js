const express = require('express')
const Route = express.Router()
const posRouter = require('./pos')
const userRoute = require('./user')

Route
  .use('/pos', posRouter)
  .use('/user', userRoute)
  .use('/uploads', express.static('./uploads'))

module.exports = Route
