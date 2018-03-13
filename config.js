var config = Object.create(null)

config.SERVER_PORT =1;//端口

config.DB_CONFIG = {
  connectionLimit: 30,//连接池大小
  host: 'rm-1.1.1.com',
  port: 3306,
  database: '1',
  user: '1',
  password: '1'
}

config.DEFAULT_REDIS_TTL = 1 //session超时:30分钟
//测试用


//图片和文件上传
config.OSS = {
  region: 'oss-cn1hangzhou',
  accessKeyId: '1',
  accessKeySecret: '1',
  bucket: '1'
}
config.OSS_BASE_URL = 'http://1.oss-cn-1.aliyuncs.com/'

module.exports = config
