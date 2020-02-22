const express = require('express')
const Route = express.Router()
const posRouter = require('./product')
const userRoute = require('./user')
const transactionRouter = require('./transaction')

Route
  .use('/product', posRouter)
  .use('/user', userRoute)
  .use('/uploads', express.static('./uploads'))
  .use('/transaction', transactionRouter)

module.exports = Route
