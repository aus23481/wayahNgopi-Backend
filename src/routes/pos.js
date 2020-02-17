const express = require('express')
const Route = express.Router()


const {getAll,insertData,updateData,deleteData,limitPage} = require('../controllers/pos')

Route
  .get('/', getAll)
  // .get('/:productId', getDetail)
  .get('/:limit', limitPage)
  .post('/', insertData)
  .patch('/:productId', updateData)
  .delete('/:productId', deleteData)

module.exports = Route