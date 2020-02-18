const posModel = require('../models/pos')
const helpers = require('../helpers')
module.exports = {
  getAll: async (request, response) => {
    try {
      const searchName = request.query.name || ''
      const sortBy = request.query.sortBy || 'id'
      const result = await posModel.getAll(searchName, sortBy)
      helpers.response(response, 200, result)
    } catch (error) {
      console.log(error)
      helpers.errorResponse(response, 400, 'Internal server error')
    }
  },
  getDetail: async (request, response) => {
    try {
      const productId = request.params.productId
      const result = await posModel.getDetail(productId)
      helpers.response(response, 200, result)
    } catch (error) {
      console.log(error)
      helpers.errorResponse(response, 400, 'Internal server error')
    }
  },
  insertData: async (request, response) => {
    try {
      const data = {
        name: request.body.name,
        description: request.body.description,
        category: request.body.category,
        image: `http://localhost:8006/uploads/${request.file.filename}`,
        price: request.body.price,
        create_at: new Date()
      }
      const result = await posModel.insertData(data)
      helpers.response(response, 200, result)
    } catch (error) {
      console.log(error)
      helpers.errorResponse(response, 400, 'Internal server error')
    }
  },
  updateData: async (request, response) => {
    try {
      const data = {
        name: request.body.name,
        description: request.body.description,
        category: request.body.category,
        image: request.body.image,
        price: request.body.price,
        update_at: new Date()
      }
      const productId = request.params.productId
      const result = await posModel.updateData(data, productId)
      helpers.response(response, 200, result)
    } catch (error) {
      console.log(error)
      helpers.errorResponse(response, 400, 'Internal server error')
    }
  },
  deleteData: async (request, response) => {
    try {
      const productId = request.params.productId
      const result = await posModel.deleteData(productId)
      helpers.response(response, 200, result)
    } catch (error) {
      console.log(error)
      helpers.errorResponse(response, 400, 'Internal server error')
    }
  }

}
