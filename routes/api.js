const router = require('koa-router')()
const userCon = require('../controller/user')

router.get('/user/getByIDcard', userCon.getUserInfo)
router.get('/user/tranupdate', userCon.TranUpdate)

module.exports = router
