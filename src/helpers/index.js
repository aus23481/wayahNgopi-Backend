module.exports = {
  response: (response, status, data) => {
    const result = {}
    result.status = status || 200
    result.result = data
    return response.status(result.status).json(result)
  },
  cutomErrorResult: (response, status, message) => {
    const result = {}
    result.status = status || 400
    result.message = message
    return response.status(result.status).json(result)
  }
}
