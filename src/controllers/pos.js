const posModel = require('../models/pos')
module.exports = {
  getAll: async (request, response) => {
    try {
      const searchName = request.query.name || ''
      const sortBy = request.headers.sortBy || ''
      const result = await posModel.getAll(searchName)
      response.json(result)
    } catch (error) {
      console.log(error)
    }
  },
  getDetail: async (request, response) => {
    try {
      const productId = request.params.productId
      const result = await posModel.getDetail(productId)
      response.json(result)
    } catch (error) {
      console.log(error)
    }
  },
  insertData: async (request, response) => {
    try {
      const data = {
        name: request.body.name,
        description: request.body.description,
        category: request.body.category,
        image: request.file.path,
        price: request.body.price,
        create_at: new Date()
      }
      const result = await posModel.insertData(data)
      response.json(result)
    } catch (error) {
      console.log(error)
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
      response.json(result)
    } catch (error) {
      console.log(error)
    }
  },
  deleteData: async (request, response) => {
    try {
      const productId = request.params.productId
      const result = await posModel.deleteData(productId)
      response.json(result)
    } catch (error) {
      console.log(error)
    }
  }

}
