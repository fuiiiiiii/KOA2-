const userAPI = require('./../api/user')

module.exports = {
  /*获取用户信息*/
  async getUserInfo (cxt) {
    let formData = cxt.request.query
    let resData = {
      success: false,
      data: null,
      message: ''
    }
    let apiRet = await userAPI.getInfoByIDcard(formData.idcard)

    if (apiRet) {
      resData.success = true
      resData.data = apiRet
      resData.message = '查询成功'
    }
    cxt.body = resData
  },

  async TranUpdate (cxt) {
    let formData = cxt.request.query
    let resData = {
      success: false,
      data: null,
      message: ''
    }
    let apiRet = await userAPI.TranUpdate(formData.id)

    if (apiRet) {
      resData.success = true
      resData.data = apiRet
      resData.message = '查询成功'
    }
    cxt.body = resData
  }
}