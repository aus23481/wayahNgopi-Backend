const models = require('../models/transaction')
const helpers = require('../helpers')

module.exports = {
  payment: async (req, res) => {
    try {
      const payment = req.body
      if (payment === undefined || payment === '') return console.log('Tidak ada data')

      var a = 0
      await payment.products.map(e => {
        const data = {
          id_transaction: payment.id_transaction,
          id_product: e.id_product,
          stock: e.quantity
        }
        const date = {
          date_added: new Date()
        }
        models.payment(data, a, date)
        a++
      })

      helpers.response(res, 200, 'Terima kasih telah berbelanja!')
    } catch (error) {
      console.log(error)
      helpers.customErrorResponse(404, 'your request not found')
    }
  }
}
