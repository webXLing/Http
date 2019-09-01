/*
 * @Author: web_XL 
 * @Date: 2019-08-29 22:31:41 
 * @Last Modified by: web_XL
 * @Last Modified time: 2019-09-01 17:03:30
 */
// 压缩  文件上传
const http = require('http')
const fs = require('fs')
const zlib = require('zlib')

let server = http.createServer((request, response) => {
  let res = fs.readFileSync('./index.html')
  response.writeHead(200, {
    'Content-Type': 'text/html', // 返回的内容格式
    'Content-Encoding': 'gzip' // 内容的编码方式
  })
  // response.end(res)
  response.end(zlib.gzipSync(res))

})
server.listen('6060')
console.log('localhost:6060')
