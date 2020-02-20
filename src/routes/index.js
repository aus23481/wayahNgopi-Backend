const express = require('express')
const Route = express.Router()
const posRouter = require('./product')
const userRoute = require('./user')

Route
  .use('/product', posRouter)
  .use('/user', userRoute)
  .use('/uploads', express.static('./uploads'))

module.exports = Route
