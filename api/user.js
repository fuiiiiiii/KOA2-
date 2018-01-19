const db = require('./../utils/db')

module.exports = {
  /*根据身份证查询用户信息 */
  async getInfoByIDcard (IDcard) {
    let sql = 'select * from student where idcard = ' + IDcard
    try {
      let resdata = await db.query(sql)
      return resdata
    } catch (err) {
      return err
    }
  },

  /*根据ID 先修改名字 后修改手机号 测试用 */
  async TranUpdate (id) {
    var sql = new Array()
    sql.push('update student set name = "修改" where id = ' + id)
    sql.push('update student set phone = 13000000000 where id = ' + id)
    try {
      let resdata = await db.execute(sql)
      return resdata
    } catch (err) {
      return err
    }
  }
}