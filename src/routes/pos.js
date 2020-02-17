const express = require('express')
const Route = express.Router()
const multer = require('multer')

const { getAll, insertData, updateData, deleteData } = require('../controllers/pos')

const storage = multer.diskStorage({
  destination: function (request, file, cb) {
    cb(null, './src/uploads')
  },
  filename: function (request, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

Route
  .get('/', getAll)
  // .get('/:productId', getDetail)
  .post('/', upload.single('image'), insertData)
  .patch('/:productId', updateData)
  .delete('/:productId', deleteData)

module.exports = Route
