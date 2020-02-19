const express = require('express')
const Route = express.Router()
const multer = require('multer')
const { authentication, authorization } = require('../helpers/auth')
const { getAll, insertData, updateData, deleteData } = require('../controllers/pos')

const storage = multer.diskStorage({
  destination: function (request, file, cb) {
    cb(null, './uploads')
  },

  filename: function (request, file, cb) {
    cb(null, file.originalname)
  }
})

const fileFilter = (request, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true)
  } else {
    cb(new Error({ message: 'File format should be PNG,JPG,JPEG' }), false)
  }
}

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
})

Route
  .get('/', authentication, authorization, getAll)
  // .get('/:productId', getDetail)
  .post('/', upload.single('image'), insertData)
  .patch('/:productId', updateData)
  .delete('/:productId', deleteData)

module.exports = Route
