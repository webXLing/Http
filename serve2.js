/*
 * @Author: web_XL 
 * @Date: 2019-08-24 22:41:35 
 * @Last Modified by:   web_XL 
 * @Last Modified time: 2019-08-24 22:41:35 
 */

const http = require('http')
const fs = require('fs')

const serve = http.createServer(function (req, res) {
  // console.log(req)
  console.log('请求了')

  if (req.url === '/') {
    let html = fs.readFileSync('./index.html', 'utf8')
    res.writeHead(200, {
      // 'Content-Type': 'text/plain'
      'Content-Type': 'text/html'

    })
    res.end(html)
  }

  if (req.url === '/script.js') {
    res.writeHead(200, {
      // 'Content-Type': 'text/plain'
      'Content-Type': 'text/javascript',
      'Cache-Control': 'max-age=2000, no-cache',
      'Last-Modified': '123',
      'Etag': '77'

    })
    const etag = req.headers['if-none-match']
    if (etag === '77') {
      res.writeHead(304, {
        // 'Content-Type': 'text/plain'
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=2000',
        'Last-Modified': '123',
        'Etag': '77'

      })
      res.end('123')
    } else {
      res.writeHead(200, {
        // 'Content-Type': 'text/plain'
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=2000',
        'Last-Modified': '123',
        'Etag': '77'

      })
    }
    // 'Last-Modified': '123',
    // 'Etag': '77'
    // 验证缓存头
    // If - Modified - Since: 123
    // If - None - Match: 77
    res.end('console.log("script loaded 23")')
  }

  // res.end('8887')
  // max-age 如果只设置这个头 依然会去请求  那么在有效期内 直接使用缓存 忽略服务端的返回 也就不会304 显示的是200

  // no-store 会忽略请求头中 滚缓存相关的信息 发送全新的请求
  // If - Modified - Since: 123
  // // If - None - Match: 77

  // no-cache 客户端可以缓存 但是要去服务端验证 与下面的头配合
  // 验证之后直接 304 那以前的缓存
  // If - Modified - Since: 123
  // // If - None - Match: 77
})
serve.listen('8887')
console.log('serve on listening 8887')