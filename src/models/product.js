const connection = require('../config/koneksi')

module.exports = {
  getAll: (limit, activePage, searchName, sortBy, sort) => {
    // const totalData = connection.query('SELECT count(*) FROM product')
    // const totalPages = Math.ceil(totalData / limit)
    const firstData = ((limit * activePage) - limit)
    return new Promise((resolve, reject) => {
      connection.query(`SELECT
      product.id,
        product.name,
        product.description,
        category.name as category_name,
        product.image,
        product.price,
        product.create_at,
        product.update_at
        FROM 
        category,
        product
        WHERE
        product.category = category.id 
        AND
        product.name LIKE '%${searchName}%'
        ORDER BY product.${sortBy} ${sort}
        LIMIT ${firstData},${limit}
        `, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  insertData: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO product SET ?', data, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  getDetail: (productId) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM product WHERE id = ?', productId, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },

  limitPage: (limit) => {
    return new Promise((resolve, reject) => {
      // const totalData = connection.query('SELECT count (*) FROM product')
      // const totalPages = Math.ceil(totalData / limit)

      connection.query(`SELECT * FROM product LIMIT ${limit}`, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  updateData: (data, productId) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE product SET ? WHERE id = ?', [data, productId], (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },

  deleteData: (productId) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM product where id = ?', productId, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  }

}
