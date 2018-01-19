const router = require('koa-router')()
const api = require('./api')
const home = require('./home')

router.use('/', home.routes(), home.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())
module.exports = router
