const con = require('../configs/koneksi')

module.exports = {
  payment: (data, a, date) => {
    return new Promise((resolve, reject) => {
      con.query(`SELECT * FROM product WHERE id= ${data.productId}`, (error, result) => {
        if (result.length > 0) {
          var stock = result[0].stock - data.stock
          var price = result[0].price * data.stock

          if (a === 0) { con.query(`INSERT INTO transaction SET ?, id_transaction="${data.id_transaction}", totalPayment=0`, date) }

          con.query(`UPDATE product SET stock = ${stock} WHERE id=${data.productId}`, (error, result) => {
            if (error) reject(new Error(error))
            con.query(`INSERT INTO detail_transaction SET ? , price = ${price}`, data, (result) => {
              con.query(`SELECT sum(price) as tPrice FROM detail_transaction WHERE id_transaction="${data.id_transaction}"`, (error, result) => {
                if (error) reject(new Error(error))
                const newP = result[0].tPrice
                con.query(`UPDATE transaction SET totalPayment = ${newP} WHERE id_transaction="${data.id_transaction}"`, (error, result) => {
                  if (error) reject(new Error(error))
                  resolve(result)
                })
              })
            })
          })
        } else reject(new Error(error))
      })
    })
  }
}
