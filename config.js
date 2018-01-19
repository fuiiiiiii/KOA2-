var config = Object.create(null)

config.SERVER_PORT =8091;//端口

config.DB_CONFIG = {
  connectionLimit: 30,//连接池大小
  host: 'rm-bp1wy827w2db1st2bo.mysql.rds.aliyuncs.com',
  port: 3306,
  database: 'jiaxiao',
  user: 'jiaxiao',
  password: 'jiaxiaoWk315755114'
}

config.DEFAULT_REDIS_TTL = 1800 //session超时:30分钟
//测试用
/*
config.PROTOCOL_GLOBAL_URL = 'http://114.55.89.156:8085'//全国平台
config.PROTOCOL_PROVINCE_URL = 'http://114.55.89.156:8000'//省平台
config.PROTOCOL_PFX_SERIAL = '15AC573723B'//证书序列号
config.PRIVATE_KEY = '-----BEGIN RSA PRIVATE KEY-----\n'+
'MIIEowIBAAKCAQEA0wKDvWPFYedgyq555CuVdm+LWZLI0O484YnBBMLA7J/H08tQ\n'+
'tnpyleNixr3XgWg4CvEeo0ysKpgZ0XnaC9fo38F3K9CwA6h4LtUZtKtJ1Yoq7+vs\n'+
'QzlXRba4bl8s7YQe26lLfsHUCEmIR+WBOsgi+t63ihdjKKFbKJcC0UymCiMal7VA\n'+
'PgfIkN+Mh59sl1UgnSeuMI2lAu7Lz7VQxsm5NpWAmDhNpu7pZ16kewh4Xb+qk8wt\n'+
'6yhZeedc3CRbDVyncSbHxRjv080ViH2DgqvYnd+4TP7Xdxz5ivvijNRnrjG+gPgU\n'+
'JPqZICUh3VbKrQ8xdLoiJvzdrZ7kVpUcDqrEowIDAQABAoIBACeNBRxuowSi1eWn\n'+
'pnk6Ih288qWrebCPtyGfLGq0Bm1T1aTBKzPI58logY827jn3SuniIBgDuxGQyOYW\n'+
'rOQjaCbooGm6CAPng/9jOho/MOuxpjKqSfKfwNf0U8V8WXN7nD0YEmqD8jZLchvn\n'+
'zL0z3jqfnE9p6tAmzmthQsnwT/7+FlAwRN6QCVZH1rTK5LEwxZ5Xfak2UtmGckIe\n'+
'FunwdZBz4Rc/liD5eWtMoXi7krFNAHl1ACAyOGrnvW3znL+ns3WlbyRZCC/eqepb\n'+
'4gpIWzHEWQRb4V+11G+xvD67dJPtuF0PSkZeKc8njyyeCOE1kUgd85cIfKXpxv0/\n'+
'WruwzmECgYEA6mglLEsYDPY4phcB6P7n1HYMo8O4zjjnDbUhYFQUgvS/Y/4kidKC\n'+
'W3iS1OKLIGlgpsj3dfsGqC99dyskpEot0AhEU6oV8pg8CAky2Yo719XnPUCDxHrd\n'+
'xkSl7UK6gicb6nyPdEflBLEtsv2oSgPhZgcpBbvNse5AZMHZSCyt4w8CgYEA5nKd\n'+
'OhGtdp3g5gKLz4j5iNuO1A83yV8NP7e0gv7EOif27HAMpo7+N/jXDGuesyH5xzir\n'+
'Vrb7FXdsztC8zXOl0LZ5fHzfjMK3xzP6y9pgt6E3sXfp6FA1HFGgpoEKvUcEO6ji\n'+
'2EObyVcDeMo7mcSjB+mfidm3+Nj+XWxr9/9sdS0CgYEA3rqWl7/C2o4axbaW2g1b\n'+
'u0VwPSt8LndjFGNHk4BQ/R4RvbF+hna/5qpq2l1oVSPL8q6CdFhRuv1k+hbEelcB\n'+
'sOoqAlVbBWghooEbEBmJQ0y8rDbg/ZDBqeMQxqDhF0qR+/zfUl39/rdb9PeRMML/\n'+
'KTMkh44rpSX9ib+n9ix+DYECgYAkOK2n2/F07HnWDV5mX3RBY6k+ganWF/+gHULd\n'+
'OCglr/Rq023ZnC4vJAjBJgVKyLNW8fxUY+xxQlUy6LJUZLISbSwJOiN1H4H9aJkq\n'+
'A4giNM/pMBzu6/R9IANtSGkkuQ3cRr5pGa9Z5ThhewAFOlgZvUnbRAJbtde9XXZX\n'+
'A6nLfQKBgEu97gDMLIf3E3hKAND9PBMDAZ7bQS9pHCR3OOa3YUQjG9cQVN1Tcr78\n'+
'1pOCseQrCIKRF50FRVz/Pded9ZXzC3xuuQw6TlAu156+qkTkeuelEXSJc8HrFXCG\n'+
'2GxPYuNV8LCjPGEFPk7A7re1UZws2G7QVsEita1xw7WfMHamz/xM\n'+
'-----END RSA PRIVATE KEY-----';//北京检测用
*/

//正式用
config.PROTOCOL_GLOBAL_URL = 'http://114.55.58.112:8085'//全国平台
config.PROTOCOL_PROVINCE_URL = 'http://59.175.219.46:6869/whread-whsjgpt/rest/whsjgpt/whsjgptService'//武汉市监管平台测试
config.PROTOCOL_PFX_SERIAL = '15DBC03D424' //证书序列号
config.PRIVATE_KEY = '-----BEGIN RSA PRIVATE KEY-----\n'+
'MIIEowIBAAKCAQEAoUWE0q6D3nMHkqwi4CfX1GW6mYatMsU0IsvZieOh2zoUptmP\n'+
'RhJnLUV3gHjCQfyinm+K9ZdoJBAHrg6lWx4s43LP3q9QCk6xO85ZuVfg/wbjT9Oj\n'+
'ppMfxRwxSDvEdG0FfpmseuVWKwWZZLk9a7TZsMvVge9BVy9jwwCA2FVhgEp1da0p\n'+
'zwPWs5NuXnz34WHlvmfpf3NTYbR6jp1139ino5QhuniWdIiDWrnMEXRGg4OKP2/M\n'+
'1EbvQ3hfFFYIjw2IF53wrX03aBR8dt3rEUCFm5f9ZNfuY3p50KXwhHUZbIz+zMhH\n'+
'iuMI0Tnjnzl3+D5Y9ic2OwNkgohx+cwq1cJj6QIDAQABAoIBAAa67vsX21r6M/O0\n'+
'CVSPdRthD3N+wlWfEzjshuyROlz6xIfeBnOnKvUhtAYBhCHa2DKCdyseoXL31Eo4\n'+
'REBUNw1a6j/h0xZLCGx1hRsOBs69y9i1/VtjQm0oawoXrHAraJJK+X67eWgcOLWS\n'+
'YXTQPFF7gDKG+JQZ3zDxIW9lyMbgw6N06ugPCc/8o9DgWdbL2TZB1kRLc+bjbjtl\n'+
'5UrSLJ5cvznHLoj4dkjS7o68i4vtI+z5U+AwlU4odCtPm1IVn6Vq4UhtUF6N+Ukl\n'+
'vPZyyWnF7/AbDfxlVrsSzAM/4sbunmEtWv9HJTLtt6ZJllzhW8UofBSKRHn0h5+r\n'+
'LEAKam0CgYEA0wVyLGSKBwEn2e7ilGCRgrWWqArYCxw/IHe//eWnkClRJT6PBdPx\n'+
'JTNP46eB/K0fwWHWBXvnnfQZUt0jLZ2Q/vfFYvPfVBSYPngNzRg1uXaB6qHp25Cq\n'+
'saRiv5nnNHneDmzoFlbMhVsGpgfPDineFTAlVC7lowBFQCSIt2Ghz4cCgYEAw6Vw\n'+
'BycWgyDr1RD01Zbu5nDlzIjxwGx1hyCuaoZ06WAc1d7/iDBdB7uofdU0QD74z+AC\n'+
'uFIO3hxhi1kya/X8C8nG5Bcpj3i04tDyLX5CsMLFmmLNTe/8Ix1sjgua5wY1gjmG\n'+
'IZs5Me2Mw1j2GXPLwH7wo1T/zUgiqSgGthPvrQ8CgYAhk7BDGAxOaQSqTLSI34TH\n'+
'w5UhT/hobCovRF6sS6qJ6ckboASp7LtmK+/+TV0Fk5aF8sdXQAvuujR9VuqOC5BS\n'+
'waIKyLs0acJ/ziKEC+IgjJbHetP3N+GxOnLsAdUkKHAI45NaWp1Yas94A64Slt7b\n'+
'iDmoV336ncRnHGkUpNhWaQKBgQCWhhQ5DJO/c3a+SPt10Vggp7/Fq58EAu4xdq16\n'+
'e9Q7MZ091wIWz87jgjfSCFTZERnxJVIyab/Sl1ddFNU8RtcSYr3JAyEQpzfUQhnx\n'+
'cnDw+gl6DIYUbo04nwzEBJ27HQXSGVvfQ0Ov7CoeqbU+Q98BTSjrIRxl3hf8uTTg\n'+
'pVoDdQKBgDSZeKeU3rTU0AdC87LVKuMPaL9+t5xRGLlmO44c2V6UppPoG7WF6crd\n'+
'yWIkdNkI42ZBLwmtS0QZ3XlWX4ycvaiY7F1kC5U8LgAOldVZjCfuqV8Mc713Kzn/\n'+
'6jzZvw+v0MK1wElfo1BP3BgR2yHwnbYwfJgibeW434eaRXqaU14W\n'+
'-----END RSA PRIVATE KEY-----';//正式用

//图片和文件上传
config.OSS = {
  region: 'oss-cn-hangzhou',
  accessKeyId: 'LTAIne3EIglf6Utq',
  accessKeySecret: '4bKMjlC7pT3irFIdz2bEPDSNfjT0LH',
  bucket: 'xunantong'
}
config.OSS_BASE_URL = 'http://xunantong.oss-cn-hangzhou.aliyuncs.com/'

module.exports = config
