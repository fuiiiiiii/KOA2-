
const mysql = require('mysql')
const config = require('../config')

const pool = mysql.createPool({
  host: config.DB_CONFIG.host,
  user: config.DB_CONFIG.user,
  password: config.DB_CONFIG.password,
  database: config.DB_CONFIG.database
})

function query(sql) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(error, connection) {
      connection.query(sql, (error, res, fileds) => {
        if (error) {
          return reject(error)
        }
        resolve(res)
        connection.release()
      })
    })
  })
}

// // 事务中执行
function Tran(connection, sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return connection.rollback(function () {
          return reject(error)
        })
      }
      resolve('success')
    })
  })
}

// /*sql 为sql语句数组 */

var execute = function (sql) {
  if (!Array.isArray(sql)) {
    return 'SQL error'
  }
  return new Promise((resolve, reject) => {
    pool.getConnection(function(error, connection) {
      connection.beginTransaction(function(err) {
        if (err) { throw err }
        let retPromise
        sql.forEach(function (element) {
          retPromise = Tran(connection, element)
        })
        retPromise.then((res) => {
          connection.commit(function(err) {
            if (err) {
              return connection.rollback(function() {
                console.log(err)
                connection.release()
                return reject(err)
              })
            }
            resolve(res)
          })
        }).catch((err) => {
          connection.rollback(function(){
            connection.release()
          })
          reject(err)
        })
      })
    })
  })
}

exports.query = query;
exports.execute = execute;