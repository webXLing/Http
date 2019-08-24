const http = require('http')
// 即使跨域了 其实请求已经发送到 目标服务器 并且得到了返回 只是浏览器 知道这个是跨域的 就勿略了返回值
const serve = http.createServer(function (req, res) {
  console.log(req)
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Origin': 'http://127.0.0.1:8887',
    'Access-Control-Allow-Headers': 'Y-test',
    'Access-Control-Allow-Methods': "PUT,POST"

  })
  res.end('123')
})
serve.listen('8889')
console.log('serve on listening 8889')