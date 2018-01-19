/**
 * 主页子路由
 */

const router = require('koa-router')()
const index = require('../controller/index')

module.exports = router
  .get('/', index)